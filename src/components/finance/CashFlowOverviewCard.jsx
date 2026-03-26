import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from "recharts";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

export default function CashFlowOverviewCard({ className = "" }) {
  const data = [
    { name: "Jan", income: 5800, expense: -4500 },
    { name: "Feb", income: 3800, expense: -6200 },
    { name: "Mar", income: 5100, expense: -5800 },
    { name: "Apr", income: 7200, expense: -3200 },
    { name: "May", income: 4500, expense: -4500 },
    { name: "Jun", income: 6100, expense: -3800 },
    { name: "Jul", income: 3200, expense: -5100 },
    { name: "Aug", income: 4200, expense: -4000 },
    { name: "Sep", income: 7000, expense: -5800 },
    { name: "Oct", income: 5500, expense: -4800 },
    { name: "Nov", income: 3500, expense: -6500 },
    { name: "Dec", income: 4800, expense: -3500 },
  ];

  // Custom shape to handle rounded corners correctly for positive/negative bars
  const CustomBar = (props) => {
    const { fill, x, y, width, height, value } = props;
    const radius = 6;
    
    // For positive bars (income), rounded at top
    // For negative bars (expense), rounded at bottom
    if (value >= 0) {
      return (
        <path
          d={`M${x},${y + height} L${x},${y + radius} Q${x},${y} ${x + radius},${y} L${x + width - radius},${y} Q${x + width},${y} ${x + width},${y + radius} L${x + width},${y + height} Z`}
          fill={fill}
        />
      );
    } else {
      return (
        <path
          d={`M${x},${y} L${x + width},${y} L${x + width},${y + height - radius} Q${x + width},${y + height} ${x + width - radius},${y + height} L${x + radius},${y + height} Q${x},${y + height} ${x},${y + height - radius} Z`}
          fill={fill}
        />
      );
    }
  };

  return (
    <Card className={`card-dark border-[#1F1F2B] ${className}`}>
      <CardHeader className="flex flex-row justify-between items-start px-6 pt-5 pb-1">
        <div className="flex flex-col">
          <CardTitle className="text-[14px] font-semibold text-[#F0F0F8]">
            Cash Flow Overview
          </CardTitle>
          <p className="text-[11px] text-[#55556A] mt-0.5">Monthly income and expenses with net cash impact.</p>
        </div>
        <Select defaultValue="this-year">
          <SelectTrigger className="w-[100px] bg-[#1E1E28] border-[#2A2A38] rounded-[8px] h-[28px] text-[11px] text-[#F0F0F8]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[#16161E] border-[#2A2A38] text-[#F0F0F8]">
            <SelectItem value="this-year">This Year</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="px-6 pb-5 pt-1">
        {/* Income / Expense Header */}
        <div className="flex items-center justify-center gap-12 py-4 border-b border-[#2A2A38] mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#8EC5FF] flex items-center justify-center text-[#0A0A0F]">
              <ArrowDownLeft size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-medium text-[#55556A] uppercase tracking-widest">INCOME</span>
              <span className="text-[16px] font-bold text-[#F0F0F8]">$61,300</span>
            </div>
          </div>
          
          <div className="w-[1px] h-6 bg-[#2A2A38]" />
          
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#3B6FE8] flex items-center justify-center text-white">
              <ArrowUpRight size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-medium text-[#55556A] uppercase tracking-widest">EXPENSES</span>
              <span className="text-[16px] font-bold text-[#F0F0F8]">$56,500</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[200px] w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#2A2A38" strokeDasharray="0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#55556A', fontSize: 11 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#55556A', fontSize: 11 }}
                ticks={[-8000, -4000, 0, 4000, 8000]}
                tickFormatter={(val) => val === 0 ? '0' : `${val/1000}k`}
              />
              <Tooltip 
                cursor={{ fill: 'transparent' }} 
                contentStyle={{ backgroundColor: '#16161E', borderColor: '#2A2A38', color: '#F0F0F8' }}
              />
              <Bar 
                dataKey="income" 
                fill="#8EC5FF" 
                shape={<CustomBar />} 
                barSize={24}
                isAnimationActive={false}
              />
              <Bar 
                dataKey="expense" 
                fill="#3B6FE8" 
                shape={<CustomBar />} 
                barSize={24}
                isAnimationActive={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
