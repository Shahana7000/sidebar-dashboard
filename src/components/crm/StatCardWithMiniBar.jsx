import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

export default function StatCardWithMiniBar({ className = "" }) {
  const data = [
    { b: 85, h: 10, bg: 5 },
    { b: 65, h: 10, bg: 25 },
    { b: 75, h: 10, bg: 15 },
    { b: 55, h: 10, bg: 35 },
    { b: 90, h: 10, bg: 0 },
    { b: 78, h: 10, bg: 12 },
  ];

  return (
    <Card className={`card-dark border-[#1F1F2B] h-[200px] flex flex-col ${className}`}>
      <CardHeader className="px-5 pt-4 pb-0 space-y-0 shrink-0">
        <div className="h-4 mb-1" /> {/* Title alignment spacer */}
        <CardTitle className="text-[12px] font-medium text-[#8888A4] leading-none">New Leads</CardTitle>
        <p className="text-[11px] text-[#55556A] leading-none mt-1">Last Month</p>
      </CardHeader>
      <CardContent className="px-5 pb-4 pt-0 flex-grow flex flex-col justify-between overflow-hidden">
        <div className="h-[100px] mt-1 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="40%" barSize={8}>
              <Bar dataKey="b" stackId="a" fill="#3B82F6" opacity={0.3} isAnimationActive={false} />
              <Bar dataKey="h" stackId="a" fill="#3B82F6" radius={[2, 2, 0, 0]} isAnimationActive={false} />
              <Bar dataKey="bg" stackId="a" fill="#14141B" isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between mt-auto shrink-0 pb-1">
          <span className="text-[24px] font-bold text-[#F0F0F8] leading-none">635</span>
          <span className="text-[13px] font-medium text-[#22C55E] leading-none">+54.6%</span>
        </div>
      </CardContent>
    </Card>
  );
}
