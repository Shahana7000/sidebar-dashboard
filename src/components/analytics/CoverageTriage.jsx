import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";

export default function CoverageTriage({ className = "" }) {
  const recoveryCards = [
    { label: "-1 ENTERPRISE DEAL", value: "+$72,133 weighted", sub: "32% of gap" },
    { label: "+5PP CONVERSION", value: "+$49,182/month", sub: "22% of gap" },
    { label: "-4D CYCLE", value: "+$90,167/day", sub: "40% of gap" },
  ];

  return (
    <Card className={`card-dark w-full ${className}`}>
      <CardHeader className="px-5 pt-5 pb-0">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Coverage Triage</CardTitle>
        <p className="text-[12px] text-[#8888A4] mt-0.5">Decision ladder for gap recovery</p>
      </CardHeader>
      
      <CardContent className="px-5 pb-5 pt-0">
        <div className="flex items-center gap-3 mt-3">
          <StatusBadge status="At Risk" />
          <span className="text-[13px] font-medium text-[#F0F0F8]">1.8x / 3.0x</span>
          <span className="text-[13px] font-medium text-[#F0F0F8]">Gap $222,930</span>
          <span className="text-[13px] text-[#8888A4]">4 deals · ETA 10d</span>
        </div>
        
        <div className="text-[12px] text-[#8888A4] mt-2">
          Pipeline coverage is below the safe threshold of 3.0x for current quarter targets.
        </div>
        
        <div className="flex flex-row gap-3 mt-4">
          {recoveryCards.map((card, idx) => (
            <div key={idx} className="flex-1 bg-[#1C1C26] border border-[#2A2A38] rounded-[8px] p-4 flex flex-col">
              <span className="text-[11px] font-medium text-[#55556A] uppercase tracking-wide">{card.label}</span>
              <span className="text-[16px] font-semibold text-[#F0F0F8] mt-1">{card.value}</span>
              <span className="text-[12px] text-[#8888A4] mt-0.5">{card.sub}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#2A2A38]">
          <span className="text-[12px] text-[#8888A4]">Owner: Leila Zhang · Focus: top gap-filling deals · Due: before next forecast call</span>
          <Button variant="outline" className="h-[30px] text-[12px] border-[#2A2A38] text-[#8888A4] rounded-[8px] hover:bg-[#1C1C26] hover:text-[#F0F0F8]">
            Open top 5 deals
          </Button>
        </div>
        
        <div className="mt-3 flex flex-col gap-0.5">
          <span className="text-[12px] text-[#55556A]">Fastest path: -4d cycle recovers 40% of gap.</span>
          <span className="text-[12px] text-[#55556A]">Priority sequence: cycle time before net-new volume.</span>
        </div>
      </CardContent>
    </Card>
  );
}
