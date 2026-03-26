import { Card, CardContent } from "@/components/ui/card";
import { Landmark } from "lucide-react";

export default function NetWorthCard({ className = "" }) {
  return (
    <Card className={`card-dark rounded-xl ${className}`}>
      <CardContent className="px-5 pt-5 pb-5 flex flex-col h-full">
        <Landmark className="w-5 h-5 text-[#8888A4] mb-3" />
        <span className="text-[13px] font-medium text-[#8888A4]">Total Net Worth</span>
        <span className="text-[24px] font-bold text-[#F0F0F8] mt-1">$845,200</span>
        <span className="text-[12px] font-medium text-[#22C55E] mt-0.5">+$12,400</span>
        <span className="text-[12px] text-[#55556A] mt-0.5">Across all accounts</span>
      </CardContent>
    </Card>
  );
}
