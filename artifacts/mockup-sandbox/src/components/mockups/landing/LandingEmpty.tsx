// design-sync
import React from "react";

export function LandingEmpty() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="inline-block p-4 bg-slate-800 rounded-full mb-4">
          <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-300">No Content Available</h3>
        <p className="text-slate-400 max-w-xs">This section is currently empty. Check back soon for updates.</p>
      </div>
    </div>
  );
}

export default LandingEmpty;
