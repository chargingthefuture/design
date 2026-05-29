import React from "react";

export function LandingLoading() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin" style={{ maskImage: 'radial-gradient(circle at center, transparent 30%, black 70%)' }}></div>
            <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-200 mb-2">Loading Survivor Hub</h3>
          <p className="text-sm text-slate-400">Preparing your community experience...</p>
        </div>
        <div className="flex justify-center space-x-1">
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}

export default LandingLoading;
