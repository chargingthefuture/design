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

  // Start at 0; navigation is manual (no autoplay)
  useEffect(() => {
    // If URL contains a preview path, navigate to it
    const preview = getPreviewPath();
    if (preview) {
      const idx = componentPaths.indexOf(preview);
      if (idx >= 0) setIndex(idx);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  function goTo(i: number) {
    const clamped = Math.max(0, Math.min(i, componentPaths.length - 1));
    setIndex(clamped);
    const path = getBasePath() + "/preview/" + componentPaths[clamped];
    try {
      window.history.replaceState({}, "", path);
    } catch {}
  }

  // Keyboard navigation: Left/Right arrows, Home, End
  useEffect(() => {
    if (componentPaths.length === 0) return;

    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName;
        if (
          tag === "INPUT" ||
          tag === "TEXTAREA" ||
          tag === "SELECT" ||
          target.isContentEditable
        ) {
          return; // don't hijack typing
        }
      }

      if (e.key === "ArrowLeft") {
        setIndex((cur) => {
          const next = Math.max(0, cur - 1);
          try {
            window.history.replaceState({}, "", getBasePath() + "/preview/" + componentPaths[next]);
          } catch {}
          return next;
        });
      } else if (e.key === "ArrowRight") {
        setIndex((cur) => {
          const next = Math.min(componentPaths.length - 1, cur + 1);
          try {
            window.history.replaceState({}, "", getBasePath() + "/preview/" + componentPaths[next]);
          } catch {}
          return next;
        });
      } else if (e.key === "Home") {
        setIndex(() => {
          try {
            window.history.replaceState({}, "", getBasePath() + "/preview/" + componentPaths[0]);
          } catch {}
          return 0;
        });
      } else if (e.key === "End") {
        setIndex(() => {
          const last = componentPaths.length - 1;
          try {
            window.history.replaceState({}, "", getBasePath() + "/preview/" + componentPaths[last]);
          } catch {}
          return last;
        });
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [componentPaths]);

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Left navigation: list of slides */}
      <aside className="w-64 bg-white border-r overflow-y-auto">
        <div className="p-4 border-b">
          <h3 className="text-sm font-semibold text-gray-700">Slides</h3>
          <p className="text-xs text-gray-500">Click a slide to open it</p>
        </div>
        <ul className="divide-y">
          {componentPaths.map((p, i) => (
            <li
              key={p}
              className={`p-3 cursor-pointer hover:bg-gray-50 flex items-center space-x-3 ${
                i === index ? "bg-gray-100" : ""
              }`}
              onClick={() => goTo(i)}
              title={p}
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">{p.split("/").pop()}</div>
                <div className="text-xs text-gray-500 truncate">{p}</div>
              </div>
              <div className="text-xs text-gray-400">{i + 1}</div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right: slide viewer */}
      <main className="flex-1 flex flex-col">
        <header className="p-4 border-b bg-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Mockup Preview</h2>
              <p className="text-sm text-gray-500">{current}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 text-sm"
                onClick={() => goTo(index - 1)}
                aria-label="Previous slide"
              >
                ← Prev
              </button>
              <button
                className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 text-sm"
                onClick={() => goTo(index + 1)}
                aria-label="Next slide"
              >
                Next →
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6 bg-white">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-5xl h-full overflow-auto bg-white rounded shadow p-6">
              <PreviewRenderer componentPath={current} modules={discoveredModules} />
            </div>
          </div>
        </div>

        <footer className="p-3 border-t bg-white text-sm text-gray-600">
          Showing {index + 1} of {componentPaths.length}
        </footer>
      </main>
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
