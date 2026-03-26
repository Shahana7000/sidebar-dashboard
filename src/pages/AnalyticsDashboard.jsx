import RiskViewToolbar from "@/components/analytics/RiskViewToolbar";
import RevenueHeroMetric from "@/components/analytics/RevenueHeroMetric";
import RiskSummaryPanel from "@/components/analytics/RiskSummaryPanel";
import ForecastVsTargetCard from "@/components/analytics/ForecastVsTargetCard";
import ManagerActionQueueCard from "@/components/analytics/ManagerActionQueueCard";
import CoverageTriage from "@/components/analytics/CoverageTriage";
import RevenueRiskLedger from "@/components/analytics/RevenueRiskLedger";

export default function AnalyticsDashboard() {
  return (
    <div className="flex flex-col gap-3">
      <RiskViewToolbar />
      <div className="flex flex-row gap-3">
        <RevenueHeroMetric className="flex-[1.2]" />
        <RiskSummaryPanel className="flex-1" />
      </div>
      <div className="flex flex-row gap-3">
        <ForecastVsTargetCard className="flex-[1.5]" />
        <ManagerActionQueueCard className="flex-1" />
      </div>
      <CoverageTriage />
      <RevenueRiskLedger />
    </div>
  );
}
