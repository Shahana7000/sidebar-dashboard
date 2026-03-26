/*
- [x] Build `StatCardWithMiniBar.jsx`
- [x] Build `StatCardWithMiniLine.jsx`
- [x] Build `StatCardSimple.jsx`
- [x] Build `StatCardWithLine.jsx`
- [x] Build `LeadsBySourceCard.jsx`
- [x] Build `ProjectRevenueVsTargetCard.jsx`
- [x] Build `SalesPipelineCard.jsx`
- [x] Build `SalesByRegionCard.jsx`
- [x] Build `ActionItemsCard.jsx`
- [x] Build `RecentLeadsTable.jsx`
- [x] Assemble `src/pages/CRMDashboard.jsx`
*/
import StatCardWithMiniBar from "@/components/crm/StatCardWithMiniBar";
import StatCardWithMiniLine from "@/components/crm/StatCardWithMiniLine";
import StatCardSimple from "@/components/crm/StatCardSimple";
import StatCardWithLine from "@/components/crm/StatCardWithLine";
import LeadsBySourceCard from "@/components/crm/LeadsBySourceCard";
import ProjectRevenueVsTargetCard from "@/components/crm/ProjectRevenueVsTargetCard";
import SalesPipelineCard from "@/components/crm/SalesPipelineCard";
import SalesByRegionCard from "@/components/crm/SalesByRegionCard";
import ActionItemsCard from "@/components/crm/ActionItemsCard";
import RecentLeadsTable from "@/components/crm/RecentLeadsTable";

export default function CRMDashboard() {
  return (
    <div className="flex flex-col gap-4">
      {/* ROW 1 — 5 stat cards (4x1 + 1x2 = 6 units) */}
      <div className="grid grid-cols-6 gap-4">
        <StatCardWithMiniBar className="col-span-1" />
        <StatCardWithMiniLine className="col-span-1" />
        <StatCardSimple type="revenue" className="col-span-1" />
        <StatCardSimple type="projects" className="col-span-1" />
        <StatCardWithLine className="col-span-2" />
      </div>

      {/* ROW 2 — leads source + project revenue */}
      <div className="grid grid-cols-2 gap-4">
        <LeadsBySourceCard />
        <ProjectRevenueVsTargetCard />
      </div>

      {/* ROW 3 — pipeline + region + actions */}
      {/*
   - [x] Match all colors, padding, and margin values from the spec.
- [x] Ensure all charts render inside shadcn Card.
- [x] Verify layout across multiple screen sizes.
*/}
      <div className="grid grid-cols-3 gap-4">
        <SalesPipelineCard />
        <SalesByRegionCard />
        <ActionItemsCard />
      </div>

      {/* ROW 4 — full width table */}
      <RecentLeadsTable />
    </div>
  );
}
