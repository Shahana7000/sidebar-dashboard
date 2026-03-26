import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

export default function MonthlyCashFlowCard({ className = "" }) {
  return (
    <Card className={`card-dark rounded-xl ${className}`}>
      <CardContent className="px-5 pt-5 pb-5 flex flex-col h-full">
        <Activity className="w-5 h-5 text-[#8888A4] mb-3" />
        <span className="text-[13px] font-medium text-[#8888A4]">Monthly Cash Flow</span>
        <span className="text-[24px] font-bold text-[#22C55E] mt-1">+$8,450</span>
        <span className="text-[12px] font-medium text-[#22C55E] mt-0.5">+$1,200</span>
        <span className="text-[12px] text-[#55556A] mt-0.5">Net positive this month</span>
      </CardContent>
    </Card>
  );
}
