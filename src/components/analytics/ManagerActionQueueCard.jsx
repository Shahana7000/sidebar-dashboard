import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/StatusBadge";

export default function ManagerActionQueueCard({ className = "" }) {
  return (
    <Card className={`card-dark ${className}`}>
      <CardHeader className="px-5 pt-5 pb-0">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Manager Action Queue</CardTitle>
        <p className="text-[12px] text-[#8888A4] mt-0.5">Prioritized interventions</p>
      </CardHeader>
      
      <CardContent className="px-5 pb-5 pt-0">
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="flex flex-col">
            <span className="text-[18px] font-bold text-[#F0F0F8]">7</span>
            <span className="text-[11px] text-[#55556A] mt-0.5">Actionable deals</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[18px] font-bold text-[#F0F0F8]">$811,000</span>
            <span className="text-[11px] text-[#55556A] mt-0.5">Revenue in play</span>
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-[18px] font-bold text-[#F0F0F8]">3</span>
            <span className="text-[11px] text-[#55556A] mt-0.5">Owners engaged</span>
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-[18px] font-bold text-[#F0F0F8]">72</span>
            <span className="text-[11px] text-[#55556A] mt-0.5">Median risk</span>
          </div>
        </div>

        <div className="mt-4 border-t border-[#2A2A38] pt-3">
          <div className="flex justify-between mb-2">
            <span className="text-[12px] font-semibold text-[#F0F0F8]">Intervention mix</span>
            <span className="text-[12px] font-medium text-[#F97316]">Escalate $174,000</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[12px] text-[#8888A4]">Escalate</span>
            <span className="text-[12px] text-[#8888A4]">Coach</span>
            <span className="text-[12px] text-[#8888A4]">Reforecast</span>
          </div>
        </div>

        <div className="mt-3 border-t border-[#2A2A38] pt-3">
          <div className="flex justify-between mb-2">
            <span className="text-[11px] text-[#55556A]">Manager focus</span>
            <span className="text-[11px] text-[#55556A]">This forecast cycle</span>
          </div>
          <div className="flex justify-between text-[12px] gap-2">
            <span className="text-[#F0F0F8]">Deal reviews</span>
            <span className="text-[#8888A4]">Next 48h</span>
          </div>
        </div>

        <div className="mt-3 border-t border-[#2A2A38] pt-3">
          <div className="text-[11px] text-[#55556A] mb-2">Next interventions</div>
          
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-[#1C1C26] rounded-[8px] p-3 flex flex-col gap-0.5">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] font-medium text-[#F0F0F8]">OPP-{1042 + idx}</span>
                  <StatusBadge status="Escalate" />
                </div>
                <span className="text-[12px] text-[#8888A4]">Owner · Risk 84</span>
                <span className="text-[12px] text-[#55556A] mt-0.5">Stalled in negotiation phase</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[12px] text-[#55556A] text-center mt-3">
          No-action monitor — 3 Deals
        </div>
      </CardContent>
    </Card>
  );
}
