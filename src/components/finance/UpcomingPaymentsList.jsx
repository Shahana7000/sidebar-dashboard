import { Card, CardContent } from "@/components/ui/card";
import { Home, Zap, Heart, CreditCard } from "lucide-react";

export default function UpcomingPaymentsList({ className = "" }) {
  const payments = [
    { name: "Apartment Rent", date: "Due on 25th March 2026", amount: "$1,200", icon: <Home size={16} /> },
    { name: "Electricity Bill", date: "Due on 25th March 2026", amount: "$75", icon: <Zap size={16} /> },
    { name: "ChatGPT Plus", date: "Due on 30th March 2026", amount: "$20", icon: <Heart size={16} /> },
    { name: "Credit Card Payment", date: "Due on 1st April 2026", amount: "$420", icon: <CreditCard size={16} /> },
  ];

  return (
    <Card className={`card-dark border-[#1F1F2B] mt-[-1px] ${className}`}>
      <CardContent className="px-5 py-5">
        <h3 className="text-[10px] font-bold text-[#55556A] uppercase tracking-widest mb-3">
          UPCOMING PAYMENTS
        </h3>
        
        <div className="flex flex-col gap-4">
          {payments.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1E1E28] border border-[#2A2A38] flex items-center justify-center text-[#8888A4]">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-medium text-[#F0F0F8]">{item.name}</span>
                  <span className="text-[10px] text-[#55556A]">{item.date}</span>
                </div>
              </div>
              <span className="text-[13px] font-bold text-[#EF4444]">
                {item.amount}
              </span>
            </div>
          ))}
        </div>

        <button className="w-full h-[36px] rounded-[8px] bg-[#1E1E28] border border-[#2A2A38] text-[#F0F0F8] text-[12px] font-medium mt-5 hover:bg-[#2A2A38] transition-colors">
          View All Payments
        </button>
      </CardContent>
    </Card>
  );
}
