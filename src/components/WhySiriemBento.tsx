"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BentoGridShowcase } from "@/components/ui/bento-grid";
import { Server, CreditCard, ShieldCheck, Activity, Globe, Truck, Smartphone, Cpu, Leaf, MapPin, ArrowUpRight } from "lucide-react";

// --- EXISTING CARDS (Unchanged) ---
// (Keeping all the card definitions as they were, they work well on white)

const IntegrationsCard = () => (
  <Card className="h-full border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group bg-white">
    <div className="p-6 h-full flex flex-col justify-between">
      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center group-hover:bg-[#00FF66] transition-colors duration-300">
        <Server className="w-5 h-5 text-neutral-600 group-hover:text-black transition-colors" />
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-black mb-1">Open API</h3>
          <p className="text-sm text-neutral-500 leading-tight">Seamless integrations with your stack.</p>
        </div>
        
        <div className="flex gap-2">
          {[<CreditCard key="1" />, <Truck key="2" />, <Globe key="3" />].map((icon, i) => (
            <div key={i} className="w-8 h-8 rounded-full border border-neutral-100 flex items-center justify-center bg-neutral-50 text-neutral-400">
              {React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Card>
);

const FeatureTagsCard = () => (
  <Card className="h-full border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
    <div className="p-6 h-full flex flex-col justify-center">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Compliance</h3>
        <ShieldCheck className="w-5 h-5 text-[#00FF66]" />
      </div>
      <div className="flex flex-wrap gap-2">
        {["OCPP 2.0.1", "ISO 15118", "SOC 2 Type II", "GDPR Ready"].map((tag, i) => (
          <Badge 
            key={i} 
            variant="secondary" 
            className="bg-neutral-100 text-neutral-700 hover:bg-[#00FF66] hover:text-black border-transparent"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  </Card>
);

const MainFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden border-none shadow-xl bg-neutral-900 group">
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
    <img 
      src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop" 
      alt="EV Charging Dashboard"
      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
    />
    
    <div className="absolute top-6 left-6 z-20">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF66]"></span>
        </div>
        <span className="text-xs font-bold text-white tracking-wide">LIVE NETWORK</span>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 p-8 z-20 max-w-lg">
      <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight tracking-tight">
        Total Visibility.<br/>Total Control.
      </h3>
      <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-6">
        Real-time telemetry, remote diagnostics, and automated fault recovery.
      </p>
      <div className="flex items-center gap-2 text-[#00FF66] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all cursor-pointer">
        Explore Platform <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  </Card>
);

const StatisticCard = () => (
  <Card className="h-full flex flex-col justify-between bg-[#00FF66] border-none shadow-lg relative overflow-hidden group">
    <div className="absolute top-[-50%] right-[-50%] w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
    <div className="p-6 relative z-10 h-full flex flex-col justify-center">
      <Activity className="h-8 w-8 text-black mb-4 opacity-80" />
      <div>
        <div className="text-6xl font-black text-black tracking-tighter leading-none mb-1">99.5<span className="text-3xl">%</span></div>
        <div className="text-sm font-bold text-black/80 uppercase tracking-wide">Uptime Guarantee</div>
      </div>
    </div>
  </Card>
);

const SecondaryFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden border-neutral-200 bg-neutral-900 group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-950" />
    <div className="p-6 relative z-10 h-full flex flex-col justify-between">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
        <Smartphone className="w-5 h-5 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-1">Driver App</h3>
        <p className="text-neutral-400 text-sm leading-snug">
          4.8★ rated mobile experience for seamless charging.
        </p>
      </div>
    </div>
  </Card>
);

const JourneyCard = () => (
  <Card className="h-full border-neutral-200 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-all">
    <div className="p-6 h-full flex flex-col justify-center gap-4">
      <div className="flex items-center gap-2 text-neutral-500 mb-2">
        <Cpu className="w-5 h-5" />
        <span className="text-xs font-bold uppercase tracking-wider">Load Balance</span>
      </div>
      
      <div className="space-y-3">
        <div className="bg-neutral-100 rounded-lg p-3">
          <div className="flex justify-between text-xs font-bold text-black mb-1">
            <span>GRID</span>
            <span>85%</span>
          </div>
          <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div className="h-full bg-black w-[85%]" />
          </div>
        </div>
        <div className="bg-[#00FF66]/10 rounded-lg p-3">
          <div className="flex justify-between text-xs font-bold text-black mb-1">
            <span>SOLAR</span>
            <span className="text-[#00c951]">ACTIVE</span>
          </div>
          <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#00FF66] w-[45%]" />
          </div>
        </div>
      </div>
    </div>
  </Card>
);

const SustainabilityCard = () => (
  <Card className="relative h-full w-full overflow-hidden border-none bg-black group shadow-lg">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay" />
    
    <div className="p-8 relative z-10 h-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#00FF66]/20 text-[#00FF66] flex items-center justify-center backdrop-blur-md border border-[#00FF66]/30">
          <Leaf className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">Net Zero Ready</h3>
          <p className="text-neutral-400 text-sm max-w-[200px]">
            Smart algorithms to optimize for lowest carbon intensity.
          </p>
        </div>
      </div>
      
      <div className="hidden md:flex gap-8 border-l border-white/10 pl-8">
        <div>
          <div className="text-2xl font-bold text-white">-40%</div>
          <div className="text-xs text-[#00FF66] font-bold uppercase tracking-wider">CO2 Emissions</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-white">100%</div>
          <div className="text-xs text-[#00FF66] font-bold uppercase tracking-wider">Renewable Capable</div>
        </div>
      </div>
    </div>
  </Card>
);

const GlobalReachCard = () => (
  <Card className="h-full border-neutral-200 bg-white hover:border-[#00FF66] transition-all group overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-contain pointer-events-none" />
    <div className="p-6 h-full flex flex-col items-center justify-center text-center relative z-10">
      <div className="mb-4 p-3 bg-neutral-50 rounded-full group-hover:scale-110 transition-transform">
        <MapPin className="w-6 h-6 text-[#00FF66]" />
      </div>
      <h3 className="text-4xl font-black text-black mb-1">20+</h3>
      <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider">
        Countries Deployed
      </p>
    </div>
  </Card>
);

export const WhySiriemBento = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <div className="h-1 w-20 mx-auto mb-6 bg-[#00FF66] rounded-full" />
        {/* CHANGED: Text back to black/neutral for white background */}
        <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
          Why Choose SIRIEM?
        </h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We combine robust hardware with intelligent software to create a future-proof charging ecosystem.
        </p>
      </div>

      <BentoGridShowcase
        integrations={<IntegrationsCard />}
        featureTags={<FeatureTagsCard />}
        mainFeature={<MainFeatureCard />}
        secondaryFeature={<SecondaryFeatureCard />}
        statistic={<StatisticCard />}
        journey={<JourneyCard />}
        sustainability={<SustainabilityCard />}
        globalReach={<GlobalReachCard />}
      />
    </div>
  );
};