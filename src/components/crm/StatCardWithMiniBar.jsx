import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

export default function StatCardWithMiniBar({ className = "" }) {
  const data = [
    { b: 40, h: 15, bg: 45 },
    { b: 30, h: 10, bg: 60 },
    { b: 20, h: 8, bg: 72 },
    { b: 35, h: 12, bg: 53 },
    { b: 50, h: 20, bg: 30 },
    { b: 38, h: 18, bg: 44 },
  ];

  return (
    <Card className={`card-dark border-[#1F1F2B] h-[160px] ${className}`}>
      <CardHeader className="px-4 pt-4 pb-0">
        <CardTitle className="text-[12px] font-medium text-[#8888A4]">New Leads</CardTitle>
        <p className="text-[11px] text-[#55556A]">Last Month</p>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <div className="h-[45px] mt-3">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="40%">
              <Bar dataKey="b" stackId="a" fill="#8EC5FF" isAnimationActive={false} />
              <Bar dataKey="h" stackId="a" fill="#3B82F6" radius={[2, 2, 0, 0]} isAnimationActive={false} />
              <Bar dataKey="bg" stackId="a" fill="#14141B" isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-[20px] font-bold text-[#F0F0F8]">635</span>
          <span className="text-[12px] font-medium text-[#22C55E]">+54.6%</span>
        </div>
      </CardContent>
    </Card>
  );
}
