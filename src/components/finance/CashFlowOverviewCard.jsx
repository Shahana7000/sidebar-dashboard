import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BarChart from "@/components/charts/BarChart";

export default function CashFlowOverviewCard({ className = "" }) {
  // Mock data for cash flow variant: Income (positive), Expenses (negative)
  const data = [
    { name: "Jan", income: 5000, expense: -3000 },
    { name: "Feb", income: 5500, expense: -3200 },
    { name: "Mar", income: 5200, expense: -4000 },
    { name: "Apr", income: 6000, expense: -3100 },
    { name: "May", income: 5800, expense: -2900 },
    { name: "Jun", income: 6200, expense: -3500 },
  ];

  return (
    <Card className={`card-dark ${className}`}>
      <CardHeader className="flex flex-row justify-between items-start px-5 pt-5 pb-0">
        <div className="flex flex-col">
          <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">
            Cash Flow Overview
          </CardTitle>
          <p className="text-[12px] text-[#8888A4] mt-0.5">Monthly income and expenses</p>
        </div>
        <Select defaultValue="this-year">
          <SelectTrigger className="w-[110px] bg-[#1E1E28] border-[#2A2A38] rounded-[8px] h-[28px] text-[12px] text-[#8888A4]">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent className="bg-[#16161E] border-[#2A2A38] text-[#F0F0F8]">
            <SelectItem value="this-year">This Year</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      
      <CardContent className="px-5 pb-5 pt-0">
        <div className="flex justify-between mt-4 mb-2">
          <div className="flex flex-col">
            <span className="text-[11px] font-medium text-[#8888A4] uppercase tracking-wide">↙ INCOME</span>
            <span className="text-[16px] font-bold text-[#F0F0F8]">$61,300</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[11px] font-medium text-[#8888A4] uppercase tracking-wide">↗ EXPENSES</span>
            <span className="text-[16px] font-bold text-[#F0F0F8]">$56,500</span>
          </div>
        </div>
        
        <div className="h-[220px]">
          {/* We assume BarChart handles grouped or stacked bars automatically from data keys */}
          <BarChart data={data} height={220} hideAxis={false} />
        </div>
      </CardContent>
    </Card>
  );
}
