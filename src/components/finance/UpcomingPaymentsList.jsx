import { Card } from "@/components/ui/card";
import { Home, Zap, MessageSquare, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UpcomingPaymentsList({ className = "" }) {
  const payments = [
    { name: "Apartment Rent", due: "Due 25th March 2026", amount: "$1,200", Icon: Home },
    { name: "Electricity Bill", due: "Due 25th March 2026", amount: "$75", Icon: Zap },
    { name: "ChatGPT Plus", due: "Due 30th March 2026", amount: "$20", Icon: MessageSquare },
    { name: "Credit Card Payment", due: "Due 1st April 2026", amount: "$420", Icon: CreditCard },
  ];

  return (
    <Card className={`card-dark w-full px-5 pt-5 pb-5 ${className}`}>
      <div className="text-[10px] font-medium text-[#55556A] uppercase tracking-widest mb-3">
        UPCOMING PAYMENTS
      </div>
      
      <div className="flex flex-col">
        {payments.map((payment, idx) => {
          const { Icon } = payment;
          return (
            <div key={idx} className="flex items-center gap-3 py-2.5 border-b border-[#1F1F2B] last:border-0">
              <div className="w-8 h-8 rounded-full bg-[#1E1E28] flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-[#8888A4]" />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[13px] font-medium text-[#F0F0F8] truncate">{payment.name}</span>
                <span className="text-[12px] text-[#55556A] mt-0.5">{payment.due}</span>
              </div>
              <span className="text-[13px] font-medium text-[#EF4444] whitespace-nowrap">{payment.amount}</span>
            </div>
          );
        })}
      </div>
      
      <Button variant="outline" className="w-full h-[32px] text-[12px] border-[#2A2A38] text-[#8888A4] rounded-[8px] mt-3 hover:bg-[#1C1C26] transition-colors">
        View All Payments
      </Button>
    </Card>
  );
}
