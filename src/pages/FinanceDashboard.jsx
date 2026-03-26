import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrimaryAccountCard from "@/components/finance/PrimaryAccountCard";
import NetWorthCard from "@/components/finance/NetWorthCard";
import MonthlyCashFlowCard from "@/components/finance/MonthlyCashFlowCard";
import SavingsRateCard from "@/components/finance/SavingsRateCard";
import CashFlowOverviewCard from "@/components/finance/CashFlowOverviewCard";
import MyCardWidget from "@/components/finance/MyCardWidget";
import UpcomingPaymentsList from "@/components/finance/UpcomingPaymentsList";
import SpendingBreakdownCard from "@/components/finance/SpendingBreakdownCard";
import IncomeReliabilityCard from "@/components/finance/IncomeReliabilityCard";

export default function FinanceDashboard() {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="flex border-b border-[#2A2A38] bg-transparent rounded-none h-auto pb-0 gap-0 w-full justify-start">
        <TabsTrigger 
          value="overview"  
          className="px-4 pb-3 text-[13px] data-[state=active]:text-[#F0F0F8] data-[state=active]:border-b-2 data-[state=active]:border-[#3B6FE8] text-[#8888A4] hover:text-[#F0F0F8] rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger 
          value="activity"  
          className="px-4 pb-3 text-[13px] data-[state=active]:text-[#F0F0F8] data-[state=active]:border-b-2 data-[state=active]:border-[#3B6FE8] text-[#8888A4] hover:text-[#F0F0F8] rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Activity
        </TabsTrigger>
        <TabsTrigger 
          value="insights"  
          className="px-4 pb-3 text-[13px] data-[state=active]:text-[#F0F0F8] data-[state=active]:border-b-2 data-[state=active]:border-[#3B6FE8] text-[#8888A4] hover:text-[#F0F0F8] rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Insights
        </TabsTrigger>
        <TabsTrigger 
          value="utilities" 
          className="px-4 pb-3 text-[13px] data-[state=active]:text-[#F0F0F8] data-[state=active]:border-b-2 data-[state=active]:border-[#3B6FE8] text-[#8888A4] hover:text-[#F0F0F8] rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Utilities
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <div className="flex flex-col gap-3 mt-3">

          {/* ROW 1 */}
          <div className="flex flex-row gap-3">
            <PrimaryAccountCard className="flex-1" />
            <NetWorthCard className="flex-1" />
            <MonthlyCashFlowCard className="flex-1" />
            <SavingsRateCard className="flex-1" />
          </div>

          {/* ROW 2 */}
          <div className="flex flex-row gap-3">
            <CashFlowOverviewCard className="flex-[1.5]" />
            <div className="flex flex-col gap-3 flex-1">
              <MyCardWidget />
              <UpcomingPaymentsList />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="flex flex-row gap-3">
            <SpendingBreakdownCard className="flex-1" />
            <IncomeReliabilityCard className="flex-1" />
          </div>

        </div>
      </TabsContent>
    </Tabs>
  );
}
