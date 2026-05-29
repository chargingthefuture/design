import React from "react";
import { Users, Radio, HomeIcon, Navigation, BookOpen, Hammer, Code, Globe, Coins, Briefcase, Heart, Smile, Share2, Activity, Award, Target, ShieldCheck } from "lucide-react";

export function LandingFeaturesPublic() {
  const features = [
    { name: "Hub", emoji: "🏠", icon: Users, color: "#38BDF8", desc: "AI-powered chat & safe channels" },
    { name: "Chyme", emoji: "🎙️", icon: Radio, color: "#22C55E", desc: "Live social audio rooms" },
    { name: "LightHouse", emoji: "🏠", icon: HomeIcon, color: "#EAB308", desc: "Safe housing listings" },
    { name: "TrustTransport", emoji: "📦", icon: Navigation, color: "#F97316", desc: "Vetted transportation" },
    { name: "Directory", emoji: "📇", icon: BookOpen, color: "#3B82F6", desc: "Skills & services" },
    { name: "Foundation", emoji: "🪛", icon: Hammer, color: "#EF4444", desc: "Tools & infrastructure" },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-950 to-slate-900 p-8 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Featured Tools</h2>
          <p className="text-slate-400">Built by survivors, for survivors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition cursor-pointer border border-slate-700 hover:border-slate-600">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{ backgroundColor: `${feature.color}20` }}>
                    {feature.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                    <p className="text-sm text-slate-400 mt-1">{feature.desc}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700 text-xs text-slate-500">
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LandingFeaturesPublic;
