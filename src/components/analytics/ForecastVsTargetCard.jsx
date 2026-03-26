import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComposedChart from "@/components/charts/ComposedChart";

export default function ForecastVsTargetCard({ className = "" }) {
  // We use the default internal data inside ComposedChart for now,
  // but we can pass real metrics if required as the 'data' prop.
  return (
    <Card className={`card-dark ${className}`}>
      <CardHeader className="px-5 pt-5 pb-0">
        <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">Forecast vs Target</CardTitle>
        <p className="text-[12px] text-[#8888A4] mt-0.5">12-week trend with context</p>
      </CardHeader>
      
      <CardContent className="px-5 pb-5 pt-0">
        <div className="flex items-start gap-6 mt-4 pb-4 border-b border-[#2A2A38]">
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold text-[#F0F0F8]">72.4%</span>
            <span className="text-[11px] text-[#55556A] mt-0.5">Attainment</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold text-[#F0F0F8]">$1,284,000</span>
            <span className="text-[11px] text-[#55556A] mt-0.5">Weighted Pipeline</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-semibold text-[#F0F0F8]">81.0%</span>
            <span className="text-[11px] text-[#55556A] mt-0.5">Forecast Confidence</span>
          </div>
        </div>
        
        <div className="h-[200px] mt-4">
          <ComposedChart height={200} />
        </div>
      </CardContent>
    </Card>
  );
}
