import { Card, CardContent } from "@/components/ui/card";
import { PiggyBank } from "lucide-react";

export default function SavingsRateCard({ className = "" }) {
  return (
    <Card className={`card-dark rounded-xl ${className}`}>
      <CardContent className="px-5 pt-5 pb-5 flex flex-col h-full">
        <PiggyBank className="w-5 h-5 text-[#8888A4] mb-3" />
        <span className="text-[13px] font-medium text-[#8888A4]">Savings Rate</span>
        <span className="text-[24px] font-bold text-[#F0F0F8] mt-1">24.5%</span>
        <span className="text-[12px] font-medium text-[#22C55E] mt-0.5">+2.1%</span>
        <span className="text-[12px] text-[#55556A] mt-0.5">Of total income</span>
      </CardContent>
    </Card>
  );
}
