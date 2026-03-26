import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function StatCardWithMiniLine({ className = "" }) {
  const data = [
    { v: 30 }, { v: 50 }, { v: 40 }, { v: 10 }, { v: 60 }, { v: 35 }, { v: 50 },
  ];

  return (
    <Card className={`card-dark border-[#1F1F2B] h-[160px] ${className}`}>
      <CardHeader className="px-4 pt-4 pb-0">
        <CardTitle className="text-[12px] font-medium text-[#8888A4]">Proposals Sent</CardTitle>
        <p className="text-[11px] text-[#55556A]">Last Month</p>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <div className="h-[80px] -mx-4 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="v" 
                stroke="#8EC5FF" 
                strokeWidth={2} 
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
