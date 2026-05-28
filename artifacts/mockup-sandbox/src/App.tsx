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
      <pre style={{ color: "red", padding: "2rem", fontFamily: "system-ui" }}>
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

function Gallery() {
  const moduleKeys = Object.keys(discoveredModules).filter((k) =>
    k.startsWith("./components/mockups/"),
  );

  const componentPaths = moduleKeys.map((k) =>
    k.replace("./components/mockups/", "").replace(/\.tsx$/, ""),
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (componentPaths.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % componentPaths.length);
    }, 3000);
    return () => clearInterval(id);
  }, [componentPaths.length]);

  if (componentPaths.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">
            No mockups available
          </h1>
          <p className="text-gray-500">Add mockup `.tsx` files under `src/components/mockups`.</p>
        </div>
      </div>
    );
  }

  const current = componentPaths[index];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-semibold text-gray-900">Mockup Preview</h2>
          <p className="text-sm text-gray-500">{current}</p>
        </div>

        <div className="bg-white rounded shadow p-6">
          <PreviewRenderer componentPath={current} modules={discoveredModules} />
        </div>

        <div className="mt-3 text-center text-sm text-gray-500">
          Showing {index + 1} of {componentPaths.length}
        </div>
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

  return <Gallery />;
}

export default App;
