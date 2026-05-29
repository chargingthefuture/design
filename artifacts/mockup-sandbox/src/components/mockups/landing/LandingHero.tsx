import React from "react";

export function LandingHeroPublic() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Survivor Hub
          </h1>
          <p className="text-xl md:text-2xl text-slate-300">
            The Safe Community Network for Human Trafficking Survivors
          </p>
        </div>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Built by survivors, for survivors. A decentralized ecosystem of tools designed to help you reclaim your power, build community, and create economic opportunity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition">
            Explore Features
          </button>
          <button className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-12 text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400">17</div>
            <div className="text-sm text-slate-400">Mini Apps</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">5M+</div>
            <div className="text-sm text-slate-400">Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">100%</div>
            <div className="text-sm text-slate-400">Survivor Led</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHeroPublic;
