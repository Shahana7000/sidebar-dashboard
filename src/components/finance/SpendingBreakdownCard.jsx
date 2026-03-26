import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SpendingBreakdownCard({ className = "" }) {
  const segments = [
    { name: "Housing", pct: 33, color: "#3B6FE8" },
    { name: "Transport", pct: 15, color: "#818CF8" },
    { name: "Other", pct: 20, color: "#6366F1" },
    { name: "Groceries", pct: 11, color: "#60A5FA" },
    { name: "Healthcare", pct: 8, color: "#A78BFA" },
    { name: "Utilities", pct: 8, color: "#93C5FD" },
    { name: "Subscriptions", pct: 5, color: "#1E2F5C" },
  ];

  return (
    <Card className={`card-dark ${className}`}>
      <CardHeader className="px-5 pt-5 pb-3">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Spending Breakdown</CardTitle>
        <p className="text-[12px] text-[#8888A4] mt-0.5">Expense distribution</p>
      </CardHeader>
      
      <CardContent className="px-5 pb-5 pt-0">
        <div className="text-[22px] font-bold text-[#F0F0F8] mt-4">$5,000</div>
        
        <div className="flex w-full h-2 rounded overflow-hidden mt-2">
          {segments.map((s, idx) => (
            <div key={idx} style={{ width: `${s.pct}%`, backgroundColor: s.color }} />
          ))}
        </div>
        
        <div className="flex flex-col gap-2 mt-4">
          {segments.map((s, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                <span className="text-[12px] text-[#8888A4]">{s.name}</span>
              </div>
              <span className="text-[12px] font-medium text-[#F0F0F8]">{s.pct}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
