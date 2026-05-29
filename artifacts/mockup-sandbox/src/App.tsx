import { useEffect, useState, type ComponentType } from "react";

import { modules as discoveredModules } from "./.generated/mockup-components";

type ModuleMap = Record<string, () => Promise<Record<string, unknown>>>;

function _resolveComponent(
  mod: Record<string, unknown>,
  name: string,
): ComponentType | undefined {
  const fns = Object.values(mod).filter(
    (v) => typeof v === "function",
  ) as ComponentType[];
  return (
    (mod.default as ComponentType) ||
    (mod.Preview as ComponentType) ||
    (mod[name] as ComponentType) ||
    fns[fns.length - 1]
  );
}

function PreviewRenderer({
  componentPath,
  modules,
}: {
  componentPath: string;
  modules: ModuleMap;
}) {
  const [Component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    setComponent(null);
    setError(null);

    async function loadComponent(): Promise<void> {
      const key = `./components/mockups/${componentPath}.tsx`;
      let loader = modules[key];

      // Fallback: try to find a module whose path ends with the component path.
      if (!loader) {
        const candidates = Object.keys(modules).filter((k) =>
          k.endsWith(`/${componentPath}.tsx`) || k.endsWith(`${componentPath}.tsx`),
        );
        if (candidates.length > 0) {
          loader = modules[candidates[0]];
        }
      }

      if (!loader) {
        setError(`No component found at ${componentPath}.tsx`);
        return;
      }

      try {
        const mod = await loader();
        if (cancelled) {
          return;
        }
        const name = componentPath.split("/").pop()!;
        const comp = _resolveComponent(mod, name);
        if (!comp) {
          setError(
            `No exported React component found in ${componentPath}.tsx\n\nMake sure the file has at least one exported function component.`,
          );
          return;
        }
        setComponent(() => comp);
      } catch (e) {
        if (cancelled) {
          return;
        }

        const message = e instanceof Error ? e.message : String(e);
        setError(`Failed to load preview.\n${message}`);
      }
    }

    void loadComponent();

    return () => {
      cancelled = true;
    };
  }, [componentPath, modules]);

  if (error) {
    return (
      <pre style={{ color: "#f87171", padding: "2rem", fontFamily: "system-ui", backgroundColor: "#1f2937", borderRadius: "0.5rem", border: "1px solid #4b5563" }}>
        {error}
      </pre>
    );
  }

  if (!Component) return null;

  return <Component />;
}

function getBasePath(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

function getPreviewExamplePath(): string {
  const basePath = getBasePath();
  return `${basePath}/preview/ComponentName`;
}

function Index() {
  return (
    <div style={{ minHeight: "100vh", background: "#0F1117", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif", color: "#F9FAFB" }}>
      <div style={{ textAlign: "center", maxWidth: 480, padding: "0 24px" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: "#6B7280", textTransform: "uppercase", marginBottom: 12 }}>
          Charging The Future
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#F9FAFB", margin: "0 0 10px" }}>
          Component Preview Sandbox
        </h1>
        <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6, margin: "0 0 28px" }}>
          Use <code style={{ background: "#1E2A3A", padding: "2px 6px", borderRadius: 4, fontSize: 12 }}>/preview/ComponentName</code> to render any mockup component.
        </p>
        <a
          href="/preview/survivor-hub/Desktop"
          style={{ display: "inline-block", padding: "10px 24px", borderRadius: 8, background: "#1E2A3A", border: "1px solid #2A3A4A", color: "#CBD5E1", fontSize: 13, textDecoration: "none", fontWeight: 600 }}
        >
          Preview Example →
        </a>
      </div>
    </div>
  );
}

function getPreviewPath(): string | null {
  const basePath = getBasePath();
  const { pathname } = window.location;
  const local =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  const match = local.match(/^\/preview\/(.+)$/);
  return match ? match[1] : null;
}

function App() {
  const previewPath = getPreviewPath();

  if (previewPath) {
    return (
      <PreviewRenderer
        componentPath={previewPath}
        modules={discoveredModules}
      />
    );
  }

  return <Index />;
}

export default App;
