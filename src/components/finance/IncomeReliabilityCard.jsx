import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/shared/StatusBadge";

export default function IncomeReliabilityCard({ className = "" }) {
  return (
    <Card className={`card-dark ${className}`}>
      <CardHeader className="px-5 pt-5 pb-3">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Income Reliability</CardTitle>
        <p className="text-[12px] text-[#8888A4] mt-0.5">How consistent are your cash inflows</p>
      </CardHeader>
      
      <CardContent className="px-5 pb-5 pt-0">
        <div className="mt-5">
          <span className="text-[20px] font-bold text-[#F0F0F8]">High Reliability</span>
        </div>
        <div className="mt-1 flex items-center">
          <span className="text-[12px] text-[#8888A4]">Based on last 6 months</span>
          <div className="inline ml-2">
            <StatusBadge status="Stable" />
          </div>
        </div>
        
        <div className="border-t border-[#2A2A38] mt-4 mb-4" />
        
        <div className="flex justify-between items-start mt-2">
          <div className="flex flex-col">
            <span className="text-[13px] font-medium text-[#F0F0F8]">Fixed Income</span>
            <span className="text-[12px] text-[#8888A4] mt-0.5">Recurring · Predictable</span>
          </div>
          <span className="text-[16px] font-semibold text-[#F0F0F8]">$90,000</span>
        </div>
        
        <div className="flex justify-between items-start mt-4">
          <div className="flex flex-col">
            <span className="text-[13px] font-medium text-[#F0F0F8]">Variable Income</span>
            <span className="text-[12px] text-[#8888A4] mt-0.5">Fluctuating sources</span>
          </div>
          <span className="text-[16px] font-semibold text-[#F0F0F8]">$46,500</span>
        </div>
        
        <div className="flex items-center gap-2 mt-4">
          <span className="text-[12px] text-[#8888A4]">Consistency trend:</span>
          <StatusBadge status="Stable" />
        </div>
      </CardContent>
    </Card>
  );
}
