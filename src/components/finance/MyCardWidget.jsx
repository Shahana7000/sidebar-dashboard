import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export default function MyCardWidget({ className = "" }) {
  return (
    <Card className={`card-dark w-full px-5 pt-5 pb-5 ${className}`}>
      <CardHeader className="px-0 pt-0 pb-0">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">My Card</CardTitle>
        <p className="text-[12px] text-[#8888A4] mt-0.5">1 of 4 cards...</p>
      </CardHeader>
      
      <div className="bg-[#3B6FE8] w-full h-[140px] rounded-[12px] p-5 mt-3 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <CreditCard className="w-5 h-5 text-white" />
        </div>
        <div className="font-mono text-[16px] font-semibold text-white tracking-[0.15em]">
          •••• •••• •••• 2301
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-white/80 uppercase tracking-wide">ARHAM KHAN</span>
            <span className="text-[10px] text-white/60">VALID THRU 06/30</span>
          </div>
          <div className="relative w-8 h-5">
            <div className="absolute left-0 w-5 h-5 rounded-full bg-red-500 opacity-80 mix-blend-multiply"></div>
            <div className="absolute right-0 w-5 h-5 rounded-full bg-yellow-500 opacity-80 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col mt-3">
        <div className="flex justify-between items-center py-2 border-b border-[#1F1F2B]">
          <span className="text-[12px] text-[#8888A4]">Card type</span>
          <span className="text-[12px] font-medium text-[#F0F0F8]">Virtual Mastercard</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-[#1F1F2B]">
          <span className="text-[12px] text-[#8888A4]">Billing cycle</span>
          <span className="text-[12px] font-medium text-[#F0F0F8]">1st - 31st</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-[#1F1F2B]">
          <span className="text-[12px] text-[#8888A4]">Card Limit</span>
          <span className="text-[12px] font-medium text-[#F0F0F8]">$10,000</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-[#1F1F2B]">
          <span className="text-[12px] text-[#8888A4]">Available Balance</span>
          <span className="text-[12px] font-medium text-[#F0F0F8]">$6,250</span>
        </div>
      </div>
      
      <button className="bg-[#3B6FE8] shadow-sm text-white font-medium w-full h-[36px] rounded-[8px] text-[13px] mt-4 hover:bg-[#4D7FF5] transition-colors">
        Manage Card
      </button>
      <button className="border border-[#2A2A38] text-[#8888A4] w-full font-medium h-[36px] rounded-[8px] mt-2 hover:bg-[#1C1C26] transition-colors">
        Add Card
      </button>
    </Card>
  );
}
