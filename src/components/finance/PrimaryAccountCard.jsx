import { Card, CardContent } from "@/components/ui/card";
import { Wallet } from "lucide-react";

export default function PrimaryAccountCard({ className = "" }) {
  return (
    <Card className={`card-dark rounded-xl ${className}`}>
      <CardContent className="px-5 pt-5 pb-5 flex flex-col h-full">
        <Wallet className="w-5 h-5 text-[#8888A4] mb-3" />
        <span className="text-[13px] font-medium text-[#8888A4]">Primary Checking</span>
        <span className="text-[24px] font-bold text-[#F0F0F8] mt-1">$124,500</span>
        <span className="text-[12px] font-medium text-[#22C55E] mt-0.5">+$4,500</span>
        <span className="text-[12px] text-[#55556A] mt-0.5">Available balance</span>
        
        <div className="flex gap-2 mt-auto pt-4">
          <button className="bg-[#3B6FE8] text-white flex-1 h-[32px] rounded-[8px] text-[13px] font-medium transition-colors hover:bg-[#4D7FF5]">
            Pay
          </button>
          <button className="bg-[#1E1E28] text-[#8888A4] border border-[#2A2A38] flex-1 h-[32px] rounded-[8px] text-[13px] font-medium transition-colors hover:bg-[#1C1C26] hover:text-[#F0F0F8]">
            Request
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
