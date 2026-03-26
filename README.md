# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Studio Admin — Dashboard UI
> **Prepared by:** Senior UI/UX Developer
> **Stack:** React + Tailwind CSS + shadcn/ui + Recharts + React Router v6
> **Pages:** CRM Dashboard · Finance Dashboard · Analytics/Risk View
> **Architecture:** Sidebar + Topbar are constant via `DashboardLayout.jsx` · Pages swap via `<Outlet />`

---

## 👨‍💻 Developer Notes (Read First)

This README is the **single source of truth** for building the Studio Admin dashboard.
Every folder, file, component, chart, color, spacing, and padding value is documented here.

Key rules to follow throughout the build:
- **Never mix page components** — crm/ finance/ analytics/ are strictly separated
- **Every chart lives in** `src/components/charts/` as its own file
- **Every chart must be used inside** a shadcn `<Card className="card-dark">` in its parent component
- **Margin and padding are critical** — match exact values from this document
- **All imports use** `@/` alias (e.g. `import Sidebar from "@/components/sidebar/Sidebar"`)
- **Do not move or rename** existing files — only add what is missing

---

## ✅ Master Build Checklist

### Phase 1 — Missing Files to Create
- [ ] Create `src/router/index.jsx`
- [ ] Create `src/lib/badgeColors.js`
- [ ] Create `src/components/charts/ComposedChart.jsx` ← only missing chart
- [ ] Create `src/components/crm/` folder + all CRM component files
- [ ] Create `src/components/finance/` folder + all Finance component files
- [ ] Create `src/components/analytics/` folder + all Analytics component files

### Phase 2 — Wire Routing
- [ ] Complete `src/router/index.jsx` with all 3 routes
- [ ] Update `src/main.jsx` to use `RouterProvider`
- [ ] Verify `src/layout/DashboardLayout.jsx` uses `<Outlet />`
- [ ] Verify Sidebar nav links use `NavLink` + `useLocation` for active state

### Phase 3 — Shared Components
- [ ] Build `src/components/shared/StatusBadge.jsx`
- [ ] Build `src/components/shared/DeltaBadge.jsx`
- [ ] Build `src/components/sidebar/Sidebar.jsx`
- [ ] Build `src/components/sidebar/SidebarNavItem.jsx`
- [ ] Build `src/components/topbar/Topbar.jsx`

### Phase 4 — CRM Components
- [ ] `StatCardWithMiniBar.jsx` — uses `BarChart.jsx` (Chart 1)
- [ ] `StatCardWithMiniLine.jsx` — uses `LineChart.jsx` (Chart 2)
- [ ] `StatCardSimple.jsx` — no chart
- [ ] `StatCardWithLine.jsx` — uses `LineChart.jsx` (Chart 3)
- [ ] `LeadsBySourceCard.jsx` — uses `PieChart.jsx` (Chart 4)
- [ ] `ProjectRevenueVsTargetCard.jsx` — uses `BarChart.jsx` (Chart 5)
- [ ] `SalesPipelineCard.jsx` — uses `FunnelChart.jsx` (Chart 6)
- [ ] `SalesByRegionCard.jsx` — CSS only, no chart
- [ ] `ActionItemsCard.jsx` — no chart
- [ ] `RecentLeadsTable.jsx` — no chart
- [ ] Assemble `src/pages/CRMDashboard.jsx`

### Phase 5 — Finance Components
- [ ] `PrimaryAccountCard.jsx` — no chart
- [ ] `NetWorthCard.jsx` — no chart
- [ ] `MonthlyCashFlowCard.jsx` — no chart
- [ ] `SavingsRateCard.jsx` — no chart
- [ ] `CashFlowOverviewCard.jsx` — uses `BarChart.jsx` (Chart 7)
- [ ] `MyCardWidget.jsx` — no chart
- [ ] `UpcomingPaymentsList.jsx` — no chart
- [ ] `SpendingBreakdownCard.jsx` — CSS only, no chart
- [ ] `IncomeReliabilityCard.jsx` — no chart
- [ ] Assemble `src/pages/FinanceDashboard.jsx`

### Phase 6 — Analytics Components
- [ ] `RiskViewToolbar.jsx` — no chart
- [ ] `RevenueHeroMetric.jsx` — uses `AreaChart.jsx` (Chart 9)
- [ ] `RiskSummaryPanel.jsx` — no chart
- [ ] `ForecastVsTargetCard.jsx` — uses `ComposedChart.jsx` (Chart 8)
- [ ] `ManagerActionQueueCard.jsx` — no chart
- [ ] `CoverageTriage.jsx` — no chart
- [ ] `RevenueRiskLedger.jsx` — no chart
- [ ] Assemble `src/pages/AnalyticsDashboard.jsx`

### Phase 7 — Final Verification
- [ ] All colors match design tokens exactly
- [ ] All padding/margin values match per-component specs
- [ ] All border radii correct on cards and badges
- [ ] All charts render inside shadcn Card
- [ ] Sidebar active state updates correctly on route change
- [ ] All badge variants render correct colors
- [ ] Layout verified at 1280px · 1440px · 1920px

---

## 🗂️ Complete Folder & File Structure

```
C:\USERS\SHAHANAPARVEEN\DESKTOP\CAR-RENTAL-DASHBOARD\
│
├── src/
│   │
│   ├── assets/                         ← static assets (images, icons, svgs)
│   │
│   ├── components/
│   │   │
│   │   ├── charts/                     ← ALL Recharts chart components live here
│   │   │   ├── BarChart.jsx            ✅ EXISTS — Chart 1 (mini sparkbar) + Chart 5 (horizontal grouped) + Chart 7 (cash flow)
│   │   │   ├── LineChart.jsx           ✅ EXISTS — Chart 2 (mini sparkline) + Chart 3 (revenue growth dots)
│   │   │   ├── AreaChart.jsx           ✅ EXISTS — Chart 9 (revenue hero sparkline)
│   │   │   ├── PieChart.jsx            ✅ EXISTS — Chart 4 (leads donut)
│   │   │   ├── FunnelChart.jsx         ✅ EXISTS — Chart 6 (sales pipeline)
│   │   │   └── ComposedChart.jsx       ❌ MISSING — CREATE THIS — Chart 8 (forecast vs target)
│   │   │
│   │   ├── shared/                     ← reusable across all 3 pages
│   │   │   ├── StatusBadge.jsx         ❌ CREATE — colored pill badge
│   │   │   └── DeltaBadge.jsx          ❌ CREATE — +/- change badge
│   │   │
│   │   ├── sidebar/                    ← constant sidebar shell
│   │   │   ├── Sidebar.jsx             ❌ CREATE
│   │   │   └── SidebarNavItem.jsx      ❌ CREATE
│   │   │
│   │   ├── topbar/                     ← constant topbar shell
│   │   │   └── Topbar.jsx              ❌ CREATE
│   │   │
│   │   ├── crm/                        ❌ CREATE THIS FOLDER + ALL FILES BELOW
│   │   │   ├── StatCardWithMiniBar.jsx
│   │   │   ├── StatCardWithMiniLine.jsx
│   │   │   ├── StatCardSimple.jsx
│   │   │   ├── StatCardWithLine.jsx
│   │   │   ├── LeadsBySourceCard.jsx
│   │   │   ├── ProjectRevenueVsTargetCard.jsx
│   │   │   ├── SalesPipelineCard.jsx
│   │   │   ├── SalesByRegionCard.jsx
│   │   │   ├── ActionItemsCard.jsx
│   │   │   └── RecentLeadsTable.jsx
│   │   │
│   │   ├── finance/                    ❌ CREATE THIS FOLDER + ALL FILES BELOW
│   │   │   ├── PrimaryAccountCard.jsx
│   │   │   ├── NetWorthCard.jsx
│   │   │   ├── MonthlyCashFlowCard.jsx
│   │   │   ├── SavingsRateCard.jsx
│   │   │   ├── CashFlowOverviewCard.jsx
│   │   │   ├── MyCardWidget.jsx
│   │   │   ├── UpcomingPaymentsList.jsx
│   │   │   ├── SpendingBreakdownCard.jsx
│   │   │   └── IncomeReliabilityCard.jsx
│   │   │
│   │   ├── analytics/                  ❌ CREATE THIS FOLDER + ALL FILES BELOW
│   │   │   ├── RiskViewToolbar.jsx
│   │   │   ├── RevenueHeroMetric.jsx
│   │   │   ├── RiskSummaryPanel.jsx
│   │   │   ├── ForecastVsTargetCard.jsx
│   │   │   ├── ManagerActionQueueCard.jsx
│   │   │   ├── CoverageTriage.jsx
│   │   │   └── RevenueRiskLedger.jsx
│   │   │
│   │   └── ui/                         ✅ ALL SHADCN COMPONENTS ALREADY ADDED
│   │       ├── card.jsx
│   │       ├── table.jsx
│   │       ├── badge.jsx
│   │       ├── button.jsx
│   │       ├── checkbox.jsx
│   │       ├── select.jsx
│   │       ├── dropdown-menu.jsx
│   │       ├── separator.jsx
│   │       ├── avatar.jsx
│   │       ├── tabs.jsx
│   │       ├── tooltip.jsx
│   │       ├── progress.jsx
│   │       └── pagination.jsx
│   │
│   ├── hooks/                          ✅ EXISTS — add custom hooks here if needed
│   │
│   ├── layout/                         ✅ EXISTS
│   │   └── DashboardLayout.jsx         ✅ EXISTS — verify Outlet is wired correctly
│   │
│   ├── lib/                            ✅ EXISTS
│   │   ├── utils.js                    ✅ EXISTS — cn() utility
│   │   └── badgeColors.js              ❌ CREATE — badge color map
│   │
│   ├── pages/                          ✅ ALL 3 EXIST
│   │   ├── CRMDashboard.jsx            ✅ EXISTS — needs components wired in
│   │   ├── FinanceDashboard.jsx        ✅ EXISTS — needs components wired in
│   │   └── AnalyticsDashboard.jsx      ✅ EXISTS — needs components wired in
│   │
│   ├── router/                         ❌ CREATE THIS FOLDER
│   │   └── index.jsx                   ❌ CREATE — all routes defined here
│   │
│   └── main.jsx                        — update to use RouterProvider
│
├── index.html                          — add Inter font link here
├── vite.config.js                      — @/ alias must be configured
├── jsconfig.json                       — @/ alias for editor autocomplete
└── tailwind.config.js                  — all design tokens configured here
```

---

## 🔧 Files to Create (Step by Step)

### 1. `src/router/index.jsx` — CREATE NEW
```jsx
// Defines all 3 dashboard routes.
// DashboardLayout is the persistent shell — Sidebar + Topbar never re-render.
// Each page renders inside <Outlet /> in DashboardLayout.

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";
import CRMDashboard from "@/pages/CRMDashboard";
import FinanceDashboard from "@/pages/FinanceDashboard";
import AnalyticsDashboard from "@/pages/AnalyticsDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,       // Sidebar + Topbar always visible
    children: [
      { index: true,       element: <CRMDashboard /> },        // route: /
      { path: "finance",   element: <FinanceDashboard /> },    // route: /finance
      { path: "analytics", element: <AnalyticsDashboard /> },  // route: /analytics
    ],
  },
]);
```
- [ ] Created

---

### 2. `src/main.jsx` — UPDATE EXISTING
```jsx
// Replace existing content with RouterProvider pattern.
// RouterProvider drives everything — no separate <App /> needed.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
```
- [ ] Updated

---

### 3. `src/layout/DashboardLayout.jsx` — VERIFY EXISTING
```jsx
// This file already exists. Verify it matches this structure exactly.
// Sidebar (200px) and Topbar (52px) are constant — never unmount.
// <Outlet /> is where the 3 pages swap in and out.

import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";

export default function DashboardLayout() {
  return (
    // Root: full viewport, darkest bg (#0A0A0F), no overflow at this level
    <div className="flex h-screen bg-[#0A0A0F] font-sans overflow-hidden">

      {/* LEFT — Sidebar: 200px fixed, full height */}
      <Sidebar />

      {/* RIGHT — Topbar + scrollable page content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

        {/* TOP — Topbar: 52px fixed height */}
        <Topbar />

        {/* MAIN — page content scrolls independently */}
        {/* p-4 = 16px padding all sides */}
        <main className="flex-1 overflow-y-auto bg-[#0A0A0F] p-4">
          <Outlet />  {/* CRMDashboard / FinanceDashboard / AnalyticsDashboard renders here */}
        </main>

      </div>
    </div>
  );
}
```
- [ ] Verified / Updated

---

### 4. `src/lib/badgeColors.js` — CREATE NEW
```js
// Central badge color map.
// Import this in StatusBadge.jsx to resolve colors by status string.
// Covers all badge variants across all 3 pages.

export const badgeColors = {

  // ── CRM Lead Status ──────────────────────────────────────────
  Qualified:        { bg: "#14381F", text: "#22C55E" },
  Won:              { bg: "#14381F", text: "#22C55E" },
  "Proposal Sent":  { bg: "#1E2F5C", text: "#3B6FE8" },
  Negotiation:      { bg: "#1E2F5C", text: "#3B6FE8" },
  Contacted:        { bg: "#2A2214", text: "#FBBF24" },

  // ── Analytics Action Badges ───────────────────────────────────
  Escalate:         { bg: "#3B1212", text: "#EF4444" },
  Reforecast:       { bg: "#1E2F5C", text: "#3B6FE8" },
  Coach:            { bg: "#1E2F5C", text: "#3B6FE8" },
  "At Risk":        { bg: "#3B1212", text: "#EF4444" },

  // ── Priority Badges (CRM Action Items + Analytics) ───────────
  High:             { bg: "#3B1212", text: "#EF4444" },
  Medium:           { bg: "#2A2214", text: "#FBBF24" },
  Low:              { bg: "#14381F", text: "#22C55E" },

  // ── Finance ───────────────────────────────────────────────────
  Stable:           { bg: "#14381F", text: "#22C55E" },

  // ── Sidebar Soon Badge ────────────────────────────────────────
  Soon:             { bg: "#1E1E28", text: "#55556A" },
};
```
- [ ] Created

---

### 5. `src/components/shared/StatusBadge.jsx` — CREATE NEW
```jsx
// Reusable pill badge — resolves color from badgeColors map.
// Used across all 3 pages for lead status, priority, and action types.
//
// Specs:
//   font-size:    11px
//   font-weight:  500
//   border-radius: 6px
//   padding:      2px 8px
//   display:      inline-flex

import { badgeColors } from "@/lib/badgeColors";

export function StatusBadge({ status }) {
  const color = badgeColors[status] ?? { bg: "#1E1E28", text: "#8888A4" };

  return (
    <span
      className="inline-flex items-center text-[11px] font-medium rounded-[6px] px-2 py-0.5 whitespace-nowrap"
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      {status}
    </span>
  );
}
```
- [ ] Created

---

### 6. `src/components/shared/DeltaBadge.jsx` — CREATE NEW
```jsx
// Shows +/- percentage or value change inline next to metrics.
// positive=true → green (#22C55E)
// positive=false → red (#EF4444)
//
// Specs:
//   font-size:   12px
//   font-weight: 500
//   display:     inline-flex

export function DeltaBadge({ value, positive = true }) {
  return (
    <span
      className="inline-flex items-center text-[12px] font-medium"
      style={{ color: positive ? "#22C55E" : "#EF4444" }}
    >
      {value}
    </span>
  );
}
```
- [ ] Created

---

## 🎨 Design Tokens

### `tailwind.config.js` — VERIFY / UPDATE
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {

      // ── FONT ──────────────────────────────────────────────────
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      // ── FONT SIZES (matched 1:1 from Figma) ──────────────────
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }], // Soon badge, pill labels
        xs:    ["11px", { lineHeight: "16px" }], // hints, muted labels, KPI sub
        sm:    ["12px", { lineHeight: "18px" }], // body, table cells, descriptions
        base:  ["13px", { lineHeight: "20px" }], // nav items, card titles, toolbar
        md:    ["14px", { lineHeight: "20px" }], // section headings
        lg:    ["16px", { lineHeight: "24px" }], // minor metric values
        xl:    ["18px", { lineHeight: "28px" }], // medium metric values
        "2xl": ["22px", { lineHeight: "30px" }], // large card metrics
        "3xl": ["28px", { lineHeight: "36px" }], // stat card hero values
        "4xl": ["36px", { lineHeight: "42px" }], // Revenue hero "$1,248,000"
      },

      // ── COLORS ────────────────────────────────────────────────
      colors: {
        bg: {
          primary:   "#0A0A0F", // root page background
          surface:   "#111118", // sidebar background
          card:      "#16161E", // ALL card backgrounds
          cardHover: "#1C1C26", // card + table row hover
          input:     "#1E1E28", // inputs, toolbar btns, badge fills
        },
        border: {
          default: "#2A2A38", // card borders, dividers, table lines
          subtle:  "#1F1F2B", // inner card separators, table row lines
        },
        accent: {
          blue:        "#3B6FE8", // primary brand — CTA, active nav, charts
          blueHover:   "#4D7FF5", // blue hover
          blueMuted:   "#1E2F5C", // muted bar fill, blue badge bg
          green:       "#22C55E", // positive delta, success
          greenMuted:  "#14381F", // green badge bg
          red:         "#EF4444", // negative delta, risk, overdue
          redMuted:    "#3B1212", // red badge bg
          orange:      "#F97316", // warning, Escalate badge
          orangeMuted: "#3D2008", // orange badge bg
          amber:       "#FBBF24", // Medium badge text
          amberMuted:  "#2A2214", // amber badge bg
        },
        text: {
          primary:   "#F0F0F8", // headings, values, active nav
          secondary: "#8888A4", // labels, subtitles, muted
          tertiary:  "#55556A", // hints, placeholders, Soon text
        },
      },

      // ── BORDER RADIUS ─────────────────────────────────────────
      borderRadius: {
        sm:  "6px",  // badges, pills, small buttons
        md:  "8px",  // inputs, toolbar items
        lg:  "12px", // all main cards
        xl:  "16px", // Finance top stat cards
      },

      // ── LAYOUT DIMENSIONS ─────────────────────────────────────
      width:  { sidebar: "200px" },
      height: { topbar:  "52px"  },
    },
  },
  plugins: [],
};
```
- [ ] Verified / Updated

---

### `src/index.css` — VERIFY / UPDATE
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS variables — used by Recharts tooltip styles and inline component styles */
:root {
  --bg-primary:          #0A0A0F;
  --bg-surface:          #111118;
  --bg-card:             #16161E;
  --bg-card-hover:       #1C1C26;
  --bg-input:            #1E1E28;
  --border-default:      #2A2A38;
  --border-subtle:       #1F1F2B;
  --accent-blue:         #3B6FE8;
  --accent-blue-hover:   #4D7FF5;
  --accent-blue-muted:   #1E2F5C;
  --accent-green:        #22C55E;
  --accent-green-muted:  #14381F;
  --accent-red:          #EF4444;
  --accent-red-muted:    #3B1212;
  --accent-orange:       #F97316;
  --accent-orange-muted: #3D2008;
  --accent-amber:        #FBBF24;
  --accent-amber-muted:  #2A2214;
  --text-primary:        #F0F0F8;
  --text-secondary:      #8888A4;
  --text-tertiary:       #55556A;
}

body {
  background-color: var(--bg-primary);
  font-family: "Inter", sans-serif;
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* shadcn Card dark override — apply via className="card-dark" on every <Card> */
.card-dark {
  background-color: var(--bg-card) !important;
  border: 1px solid var(--border-default) !important;
  border-radius: 12px !important;
}

/* Table row hover state — add className="table-row-hover" to every <tr> */
.table-row-hover:hover {
  background-color: var(--bg-card-hover);
}
```
- [ ] Verified / Updated

---

## 🔀 Routing & Layout

### shadcn Card — Mandatory Pattern for Every Component
```jsx
// ⚠️ SENIOR DEVELOPER RULE:
// Every single chart and metric component MUST be wrapped in shadcn <Card>.
// Always use className="card-dark" to apply dark theme override.
// Never use plain divs as card containers — always use shadcn Card.

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Card className="card-dark">

  {/* CardHeader */}
  {/* padding: px-5 pt-5 pb-3 = 20px sides | 20px top | 12px bottom */}
  <CardHeader className="px-5 pt-5 pb-3">
    <CardTitle className="text-[13px] font-semibold text-[#F0F0F8]">
      Card Title
    </CardTitle>
    <p className="text-[12px] text-[#8888A4] mt-0.5">
      Card subtitle or description
    </p>
  </CardHeader>

  {/* CardContent */}
  {/* padding: px-5 pb-5 pt-0 = 20px sides | 20px bottom | 0 top */}
  {/* pt-0 because CardHeader already provides the top spacing */}
  <CardContent className="px-5 pb-5 pt-0">
    {/* Chart component or content goes here */}
  </CardContent>

</Card>
```

---

## 📄 Page 1 — CRM Dashboard (`/`)

### Layout Grid
```
All rows: flex flex-row gap-3   (gap-3 = 12px between every card)
Page wrapper: flex flex-col gap-3

ROW 1 — 5 cards
  StatCardWithMiniBar    flex-1
  StatCardWithMiniLine   flex-1
  StatCardSimple         flex-1   (Revenue)
  StatCardSimple         flex-1   (Projects Won)
  StatCardWithLine       flex-[1.6]   (wider — Revenue Growth)

ROW 2 — 2 cards
  LeadsBySourceCard          flex-[1.2]
  ProjectRevenueVsTarget     flex-1

ROW 3 — 3 cards
  SalesPipelineCard      flex-1
  SalesByRegionCard      flex-1
  ActionItemsCard        flex-1

ROW 4 — 1 full width
  RecentLeadsTable       w-full
```

### `src/pages/CRMDashboard.jsx` — wire all components
```jsx
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
    <div className="flex flex-col gap-3">

      {/* ROW 1 — 5 stat cards */}
      <div className="flex flex-row gap-3">
        <StatCardWithMiniBar className="flex-1" />
        <StatCardWithMiniLine className="flex-1" />
        <StatCardSimple type="revenue" className="flex-1" />
        <StatCardSimple type="projects" className="flex-1" />
        <StatCardWithLine className="flex-[1.6]" />
      </div>

      {/* ROW 2 — leads source + project revenue */}
      <div className="flex flex-row gap-3">
        <LeadsBySourceCard className="flex-[1.2]" />
        <ProjectRevenueVsTargetCard className="flex-1" />
      </div>

      {/* ROW 3 — pipeline + region + actions */}
      <div className="flex flex-row gap-3">
        <SalesPipelineCard className="flex-1" />
        <SalesByRegionCard className="flex-1" />
        <ActionItemsCard className="flex-1" />
      </div>

      {/* ROW 4 — full width table */}
      <RecentLeadsTable />

    </div>
  );
}
```
- [ ] CRMDashboard.jsx wired

---

### CRM Component Specs

#### `src/components/crm/StatCardWithMiniBar.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-4
────────────────────────────────────────────────────────────
"New Leads"          text-[13px] font-medium text-[#8888A4]
"Last Month"         text-[12px] text-[#55556A] mt-0.5
[BarChart]           height:60px  mt-3   ← import from @/components/charts/BarChart
"635"                text-[28px] font-bold text-[#F0F0F8] mt-2
"+54.6%"             DeltaBadge positive  ml-2
```
- [ ] Built

#### `src/components/crm/StatCardWithMiniLine.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-4
────────────────────────────────────────────────────────────
"Proposals Sent"     text-[13px] font-medium text-[#8888A4]
"Last Month"         text-[12px] text-[#55556A] mt-0.5
[LineChart]          height:60px  mt-3   ← import from @/components/charts/LineChart
"105"                text-[28px] font-bold text-[#F0F0F8] mt-2
"+12.3%"             DeltaBadge positive  ml-2
```
- [ ] Built

#### `src/components/crm/StatCardSimple.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-4
────────────────────────────────────────────────────────────
[icon circle]        w-8 h-8 rounded-full flex items-center justify-center
  Revenue:           bg-[#14381F]  icon text-[#22C55E]  (TrendingUp 16px)
  Projects:          bg-[#3B1212]  icon text-[#EF4444]  (Trophy 16px)
"$56,050" / "136"   text-[22px] font-bold text-[#F0F0F8] mt-3
DeltaBadge           mt-1
label text           text-[12px] text-[#8888A4] mt-1
```
- [ ] Built

#### `src/components/crm/StatCardWithLine.jsx`
```
shadcn Card: flex-[1.6] | card-dark | padding: px-5 pt-5 pb-4
────────────────────────────────────────────────────────────────
"Revenue Growth"     text-[13px] font-medium text-[#8888A4]
"Year to Date (YTD)" text-[12px] text-[#55556A] mt-0.5
[LineChart]          height:80px  mt-3   ← import from @/components/charts/LineChart
                     (variant with visible dots — pass showDots={true} prop)
"+35% growth since last year"
                     text-[12px] text-[#8888A4] mt-2
```
- [ ] Built

#### `src/components/crm/LeadsBySourceCard.jsx`
```
shadcn Card: flex-[1.2] | card-dark | padding: px-5 pt-5 pb-5
──────────────────────────────────────────────────────────────
CardHeader: "Leads by Source"

CardContent: flex flex-row gap-4 items-center
  Left:  [PieChart]      w-[180px] h-[180px] flex-shrink-0
                         ← import from @/components/charts/PieChart
  Right: custom DonutLegend list
           each row: flex justify-between items-center
           dot: w-2 h-2 rounded-full
           name: text-[12px] text-[#8888A4]
           count: text-[12px] font-medium text-[#F0F0F8]
           gap-2 between rows

Footer: flex gap-2 mt-4
  [View Full Report]  Button variant="outline" flex-1 h-[32px] text-[12px]
  [Download CSV]      Button variant="outline" flex-1 h-[32px] text-[12px]
  Both: border-[#2A2A38] text-[#8888A4] hover:bg-[#1C1C26] rounded-[8px]
```
- [ ] Built

#### `src/components/crm/ProjectRevenueVsTargetCard.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-5
────────────────────────────────────────────────────────────
CardHeader: "Project Revenue vs. Target"

CardContent:
  [BarChart]        height:220px   ← import from @/components/charts/BarChart
                    (horizontal variant — pass layout="horizontal" prop)
  "Average progress: 78% · 2 projects above target"
                    text-[12px] text-[#55556A] mt-3
```
- [ ] Built

#### `src/components/crm/SalesPipelineCard.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-5
────────────────────────────────────────────────────────────
CardHeader: "Sales Pipeline"

CardContent:
  [FunnelChart]     height:200px   ← import from @/components/charts/FunnelChart

  border-t border-[#2A2A38] pt-3 mt-3
  "Leads increased by 18.2% since last month."
                    text-[12px] text-[#8888A4]
```
- [ ] Built

#### `src/components/crm/SalesByRegionCard.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-5
────────────────────────────────────────────────────────────
NO Recharts — uses shadcn <Progress> only

CardHeader:
  "Sales by Region"   text-[13px] font-semibold text-[#F0F0F8]
  "$123,500"          text-[12px] text-[#8888A4] mt-0.5

CardContent: flex flex-col gap-3
  Each region row:
    flex justify-between items-center
      name   text-[12px] text-[#F0F0F8]
      right: $val + DeltaBadge + %  flex items-center gap-2
    <Progress value={pct}
      className="h-1 mt-1.5 bg-[#1E1E28]"
      indicatorClassName="bg-[#3B6FE8]" />

  Regions:
    North America  $37,800  +3.2%   31%
    Europe         $40,100  +8.4%   34%
    Asia Pacific   $30,950  +12.8%  28%
    Latin America  $12,200  -1.7%   7%
    Middle East    $2,450   +6.0%   2%

  Footer: border-t border-[#2A2A38] pt-3 mt-4
    "5 regions tracked · 3 regions growing"
    text-[12px] text-[#55556A]
```
- [ ] Built

#### `src/components/crm/ActionItemsCard.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-5
────────────────────────────────────────────────────────────
CardHeader: "Action Items"

CardContent: flex flex-col
  Each item: flex items-start gap-3 py-3 border-b border-[#1F1F2B]
    [Checkbox]  w-4 h-4  border-[#2A2A38]  checked: bg-[#3B6FE8]
    flex flex-col flex-1:
      flex items-center gap-2:
        title    text-[13px] font-medium text-[#F0F0F8]
        [StatusBadge]
      desc       text-[12px] text-[#8888A4] mt-0.5
      due        text-[11px] text-[#55556A] mt-0.5

  Items:
    "Send kickoff docs"        High    "Send onboarding docs..."   Due today
    "Demo call for SaaS MVP"   Medium  "Book Zoom call..."         Due tomorrow
    "Update case study"        Low     "Add latest LLM project"   Due this week
```
- [ ] Built

#### `src/components/crm/RecentLeadsTable.jsx`
```
shadcn Card: w-full | card-dark | padding: px-5 pt-5 pb-0
────────────────────────────────────────────────────────────
CardHeader: flex justify-between items-center
  "Recent Leads"           text-[13px] font-semibold text-[#F0F0F8]
  "Track and manage..."    text-[12px] text-[#8888A4] mt-0.5
  Right buttons: [View ▾] [↑↓ Export]
    bg-[#1E1E28] border border-[#2A2A38] h-[30px] text-[12px]
    text-[#8888A4] rounded-[8px] px-3

Table header: bg-[#1C1C26]
  cell: text-[11px] font-medium text-[#55556A] py-2.5 px-3
  Cols: ☐ | Ref | Name | Company | Status | Source | Last Activity | ⋮

Table rows:
  height: ~48px  border-b border-[#1F1F2B]  hover: bg-[#1C1C26]
  cell padding: py-3 px-3
  ☐   Checkbox
  Ref         text-[12px] text-[#8888A4]   (L-1012)
  Name        text-[13px] font-medium text-[#F0F0F8]
  Company     text-[12px] text-[#8888A4]
  Status      <StatusBadge />
  Source      text-[12px] text-[#8888A4]
  Last Act    text-[12px] text-[#55556A]   (30m ago)
  ⋮           shadcn DropdownMenu  16px text-[#55556A]

Table footer: flex justify-between items-center
  border-t border-[#2A2A38] py-3 px-5
  "0 of 15 row(s) selected"   text-[12px] text-[#55556A]
  "Rows per page" Select + "Page 1 of 2" + Pagination
    nav buttons: h-7 w-7 bg-[#1E1E28] border border-[#2A2A38] rounded-[6px]
```
- [ ] Built

---

## 📄 Page 2 — Finance Dashboard (`/finance`)

### Layout Grid
```
<Tabs defaultValue="overview">
  TabsList: flex  border-b border-[#2A2A38]  bg-transparent  rounded-none  h-auto  pb-0
  Each tab trigger: px-4 pb-3 text-[13px]
    active:   text-[#F0F0F8]  border-b-2 border-[#3B6FE8]
    inactive: text-[#8888A4]  hover:text-[#F0F0F8]
  Tabs: Overview | Activity | Insights | Utilities

  TabsContent "overview": flex flex-col gap-3 mt-3

    ROW 1 — 4 equal cards  (all: border-radius 16px NOT 12px)
      PrimaryAccountCard    flex-1
      NetWorthCard          flex-1
      MonthlyCashFlowCard   flex-1
      SavingsRateCard       flex-1

    ROW 2 — chart + right column
      CashFlowOverviewCard  flex-[1.5]
      right col             flex-1  flex flex-col gap-3
        MyCardWidget
        UpcomingPaymentsList

    ROW 3 — 2 equal cards
      SpendingBreakdownCard   flex-1
      IncomeReliabilityCard   flex-1
```

### `src/pages/FinanceDashboard.jsx` — wire all components
```jsx
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
        <TabsTrigger value="overview"  className="px-4 pb-3 text-[13px] ...">Overview</TabsTrigger>
        <TabsTrigger value="activity"  className="px-4 pb-3 text-[13px] ...">Activity</TabsTrigger>
        <TabsTrigger value="insights"  className="px-4 pb-3 text-[13px] ...">Insights</TabsTrigger>
        <TabsTrigger value="utilities" className="px-4 pb-3 text-[13px] ...">Utilities</TabsTrigger>
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
```
- [ ] FinanceDashboard.jsx wired

---

### Finance Component Specs

#### Finance Stat Cards — All 4 Shared Specs
```
shadcn Card: flex-1 | card-dark | border-radius:16px | padding: px-5 pt-5 pb-5
⚠️ Note: Finance top cards use border-radius 16px — override .card-dark radius for these 4 only
─────────────────────────────────────────────────────────────────────────────────
icon:    w-5 h-5 text-[#8888A4]  mb-3
label:   text-[13px] font-medium text-[#8888A4]
value:   text-[24px] font-bold text-[#F0F0F8]  mt-1
delta:   text-[12px] font-medium text-[#22C55E]  mt-0.5
sub:     text-[12px] text-[#55556A]  mt-0.5

PrimaryAccountCard only:
  value sub: "Available balance"
  buttons (flex gap-2 mt-4):
    "Pay"     bg-[#3B6FE8] text-white flex-1 h-[32px] rounded-[8px] text-[13px]
    "Request" bg-[#1E1E28] text-[#8888A4] border border-[#2A2A38] flex-1 h-[32px] rounded-[8px]

MonthlyCashFlowCard only:
  value color: text-[#22C55E]  (positive green — not white)
```
- [ ] All 4 Finance stat cards built

#### `src/components/finance/CashFlowOverviewCard.jsx`
```
shadcn Card: flex-[1.5] | card-dark | padding: px-5 pt-5 pb-5
──────────────────────────────────────────────────────────────
CardHeader: flex justify-between items-start
  Left:
    "Cash Flow Overview"    text-[13px] font-semibold text-[#F0F0F8]
    "Monthly income and..." text-[12px] text-[#8888A4] mt-0.5
  Right:
    <Select> "This Year"
    bg-[#1E1E28] border border-[#2A2A38] rounded-[8px] h-[28px] text-[12px] text-[#8888A4]

Floating labels (flex justify-between mt-4 mb-2):
  Left:  "↙ INCOME"   text-[11px] font-medium text-[#8888A4] uppercase tracking-wide
         "$61,300"    text-[16px] font-bold text-[#F0F0F8]
  Right: "↗ EXPENSES" text-[11px] font-medium text-[#8888A4] uppercase tracking-wide
         "$56,500"    text-[16px] font-bold text-[#F0F0F8] text-right

[BarChart]  height:220px   ← import from @/components/charts/BarChart
            (cash flow variant — income positive / expense negative)
```
- [ ] Built

#### `src/components/finance/MyCardWidget.jsx`
```
shadcn Card: full-width | card-dark | padding: px-5 pt-5 pb-5
──────────────────────────────────────────────────────────────
CardHeader:
  "My Card"           text-[13px] font-semibold text-[#F0F0F8]
  "1 of 4 cards..."   text-[12px] text-[#8888A4] mt-0.5

Credit card div:
  bg-[#3B6FE8] w-full h-[140px] rounded-[12px] p-5 mt-3
  flex flex-col justify-between
  Top:    Apple SVG icon  w-5 h-5  text-white
  Mid:    "•••• •••• •••• 2301"
          font-mono text-[16px] font-semibold text-white tracking-[0.15em]
  Bottom: flex justify-between items-end
    flex flex-col:
      "ARHAM KHAN"     text-[11px] font-semibold text-white/80 uppercase tracking-wide
      "VALID THRU 06/30"  text-[10px] text-white/60
    Mastercard: two overlapping circles  w-5 h-5

Card details: flex flex-col mt-3
  Each row: flex justify-between items-center py-2 border-b border-[#1F1F2B]
    label: text-[12px] text-[#8888A4]
    value: text-[12px] font-medium text-[#F0F0F8]
  Card type | Billing cycle | Card Limit | Available Balance

"Manage Card"  bg-[#3B6FE8] text-white w-full h-[36px] rounded-[8px] text-[13px] mt-4
"Add Card"     border border-[#2A2A38] text-[#8888A4] w-full h-[36px] rounded-[8px] mt-2
```
- [ ] Built

#### `src/components/finance/UpcomingPaymentsList.jsx`
```
shadcn Card: full-width | card-dark | padding: px-5 pt-5 pb-5
──────────────────────────────────────────────────────────────
"UPCOMING PAYMENTS"
  text-[10px] font-medium text-[#55556A] uppercase tracking-widest mb-3

Each row: flex items-center gap-3 py-2.5 border-b border-[#1F1F2B]
  [icon circle]  w-8 h-8 rounded-full bg-[#1E1E28] flex items-center justify-center
    icon: w-4 h-4 text-[#8888A4]
  flex flex-col flex-1:
    name   text-[13px] font-medium text-[#F0F0F8]
    due    text-[12px] text-[#55556A] mt-0.5
  amount   text-[13px] font-medium text-[#EF4444]

  Apartment Rent       Due 25th March 2026   $1,200
  Electricity Bill     Due 25th March 2026   $75
  ChatGPT Plus         Due 30th March 2026   $20
  Credit Card Payment  Due 1st April 2026    $420

"View All Payments"
  Button variant="outline" w-full h-[32px] text-[12px]
  border-[#2A2A38] text-[#8888A4] rounded-[8px] mt-3
```
- [ ] Built

#### `src/components/finance/SpendingBreakdownCard.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-5
────────────────────────────────────────────────────────────
NO Recharts — pure CSS flex segments

"Spending Breakdown"    text-[13px] font-semibold text-[#F0F0F8]
"Expense distribution"  text-[12px] text-[#8888A4] mt-0.5
"$5,000"                text-[22px] font-bold text-[#F0F0F8] mt-4

Segmented bar: flex w-full h-2 rounded overflow-hidden mt-2
  Each segment: inline div with style={{ width: "X%", backgroundColor: "hex" }}
  Housing 33%       #3B6FE8
  Transport 15%     #818CF8
  Other 20%         #6366F1
  Groceries 11%     #60A5FA
  Healthcare 8%     #A78BFA
  Utilities 8%      #93C5FD
  Subscriptions 5%  #1E2F5C

Legend: flex flex-col gap-2 mt-4
  Each row: flex justify-between items-center
    Left: flex items-center gap-2
      dot: w-2 h-2 rounded-full  style={{ backgroundColor: hex }}
      name: text-[12px] text-[#8888A4]
    Right: text-[12px] font-medium text-[#F0F0F8]
```
- [ ] Built

#### `src/components/finance/IncomeReliabilityCard.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-5
────────────────────────────────────────────────────────────
"Income Reliability"         text-[13px] font-semibold text-[#F0F0F8]
"How consistent..."          text-[12px] text-[#8888A4] mt-0.5

"High Reliability"           text-[20px] font-bold text-[#F0F0F8] mt-5
"Based on last 6 months"     text-[12px] text-[#8888A4] mt-1
[Stable StatusBadge]         inline ml-2

border-t border-[#2A2A38] mt-4 mb-4

Fixed Income: flex justify-between items-start mt-2
  flex flex-col:
    text-[13px] font-medium text-[#F0F0F8]   "Fixed Income"
    text-[12px] text-[#8888A4] mt-0.5         "Recurring · Predictable"
  text-[16px] font-semibold text-[#F0F0F8]   "$90,000"

Variable Income: flex justify-between items-start mt-4
  flex flex-col:
    text-[13px] font-medium text-[#F0F0F8]   "Variable Income"
    text-[12px] text-[#8888A4] mt-0.5         "Fluctuating sources"
  text-[16px] font-semibold text-[#F0F0F8]   "$46,500"

flex items-center gap-2 mt-4:
  text-[12px] text-[#8888A4]   "Consistency trend:"
  [Stable StatusBadge]
```
- [ ] Built

---

## 📄 Page 3 — Analytics (`/analytics`)

### Layout Grid
```
flex flex-col gap-3

RiskViewToolbar     ← NOT a Card, bare toolbar row

ROW 1: flex flex-row gap-3
  RevenueHeroMetric       flex-[1.2]
  RiskSummaryPanel        flex-1

ROW 2: flex flex-row gap-3
  ForecastVsTargetCard    flex-[1.5]
  ManagerActionQueueCard  flex-1

ROW 3: full width
  CoverageTriage

ROW 4: full width
  RevenueRiskLedger
```

### `src/pages/AnalyticsDashboard.jsx` — wire all components
```jsx
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
```
- [ ] AnalyticsDashboard.jsx wired

---

### Analytics Component Specs

#### `src/components/analytics/RiskViewToolbar.jsx`
```
NOT a Card — bare flex row
flex items-center justify-between py-2 gap-2
─────────────────────────────────────────────
Left: flex items-center gap-2
  <Select> "Risk view"
    bg-[#1E1E28] border border-[#2A2A38] rounded-[8px] h-[32px] px-3
    text-[13px] text-[#F0F0F8] min-w-[120px]

  "Filters" Button
    bg-[#1E1E28] border border-[#2A2A38] rounded-[8px] h-[32px] px-3
    text-[13px] text-[#8888A4]
    "1" badge inside: bg-[#3B6FE8] text-white rounded-[6px] text-[11px] px-1.5 ml-1

  "Showing: Renewals"  text-[12px] text-[#8888A4] ml-2

Right: flex items-center gap-2
  date range text
    bg-[#1E1E28] border border-[#2A2A38] rounded-[8px] h-[32px] px-3
    text-[13px] text-[#8888A4]

  Export Button
    bg-[#1E1E28] border border-[#2A2A38] rounded-[8px] h-[32px] px-3
    text-[13px] text-[#8888A4]
    Download icon: w-3.5 h-3.5 mr-1.5
```
- [ ] Built

#### `src/components/analytics/RevenueHeroMetric.jsx`
```
shadcn Card: flex-[1.2] | card-dark | padding: px-5 pt-5 pb-4
──────────────────────────────────────────────────────────────
"Revenue"               text-[13px] font-medium text-[#8888A4]

flex items-baseline gap-3 mt-1:
  "$1,248,000"          text-[36px] font-bold text-[#F0F0F8]  ← LARGEST IN DESIGN
  <DeltaBadge>          "+9.4%"   positive
  <DeltaBadge>          "+$107,000"  positive

flex items-center gap-3 mt-1:
  "Previous $1,141,000" text-[12px] text-[#8888A4]
  "Risk Ladder 30"
    inline-flex bg-[#1E1E28] text-[#8888A4] text-[11px] px-2 py-0.5 rounded-[6px]

[AreaChart]             height:60px  mt-3
                        ← import from @/components/charts/AreaChart

"Selected range"        text-[12px] text-[#55556A] text-center mt-2
```
- [ ] Built

#### `src/components/analytics/RiskSummaryPanel.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-5
────────────────────────────────────────────────────────────
"Risk Summary"                  text-[13px] font-semibold text-[#F0F0F8]
"Core risk signals vs..."       text-[12px] text-[#8888A4] mt-0.5

flex flex-row mt-4: (4 KPI tiles)
  Each tile: flex-1 flex flex-col items-center text-center px-4
  border-r border-[#2A2A38] on first 3 tiles

  value:  text-[22px] font-bold text-[#F0F0F8]
  label:  text-[11px] text-[#55556A] mt-1

  "8"           "Stalled Deals"
  "$1,151,000"  "Revenue at Risk"
  "+8.3pp"      "Win Rate Trend"
  "+2.3 days"   "Sales Cycle Drift"
```
- [ ] Built

#### `src/components/analytics/ForecastVsTargetCard.jsx`
```
shadcn Card: flex-[1.5] | card-dark | padding: px-5 pt-5 pb-5
──────────────────────────────────────────────────────────────
CardHeader:
  "Forecast vs Target"            text-[13px] font-semibold text-[#F0F0F8]
  "12-week trend with context"    text-[12px] text-[#8888A4] mt-0.5

3 mini KPIs: flex items-start gap-6 mt-4 pb-4 border-b border-[#2A2A38]
  each: flex flex-col
  value: text-[16px] font-semibold text-[#F0F0F8]
  label: text-[11px] text-[#55556A] mt-0.5
  "72.4%"       "Attainment"
  "$1,284,000"  "Weighted Pipeline"
  "81.0%"       "Forecast Confidence"

[ComposedChart]   height:200px  mt-4
                  ← import from @/components/charts/ComposedChart  ← CREATE THIS FILE
```
- [ ] Built

#### `src/components/analytics/ManagerActionQueueCard.jsx`
```
shadcn Card: flex-1 | card-dark | padding: px-5 pt-5 pb-5
────────────────────────────────────────────────────────────
CardHeader: "Manager Action Queue" + subtitle

Stats grid (grid grid-cols-2 gap-3 mt-4):
  value: text-[18px] font-bold text-[#F0F0F8]
  label: text-[11px] text-[#55556A] mt-0.5
  "7" Actionable deals | "$811,000" Revenue in play
  "3" Owners engaged   | "72" Median risk

Intervention mix (mt-4 border-t border-[#2A2A38] pt-3):
  flex justify-between mb-2:
    "Intervention mix"   text-[12px] font-semibold text-[#F0F0F8]
    "Escalate $174,000"  text-[12px] font-medium text-[#F97316]
  rows: Escalate/Coach/Reforecast  text-[12px] text-[#8888A4] gap-2

Manager focus (mt-3 border-t border-[#2A2A38] pt-3):
  flex justify-between mb-2:
    "Manager focus"       text-[11px] text-[#55556A]
    "This forecast cycle" text-[11px] text-[#55556A]
  data rows: flex justify-between  text-[12px]  gap-2

Next interventions (mt-3 border-t border-[#2A2A38] pt-3):
  "Next interventions"  text-[11px] text-[#55556A] mb-2
  3 items: bg-[#1C1C26] rounded-[8px] p-3 gap-3
    Row 1: OPP-ID text-[13px] font-medium text-[#F0F0F8]  +  [StatusBadge] ml-auto
    Row 2: "Owner · Risk XX"  text-[12px] text-[#8888A4]
    Row 3: description        text-[12px] text-[#55556A] mt-0.5

Footer: "No-action monitor — 3 Deals"
  text-[12px] text-[#55556A] text-center mt-3
```
- [ ] Built

#### `src/components/analytics/CoverageTriage.jsx`
```
shadcn Card: w-full | card-dark | padding: px-5 pt-5 pb-5
────────────────────────────────────────────────────────────
"Coverage Triage"      text-[13px] font-semibold text-[#F0F0F8]
"Decision ladder..."   text-[12px] text-[#8888A4] mt-0.5

Risk row (flex items-center gap-3 mt-3):
  [At Risk StatusBadge]
  "1.8x / 3.0x"   text-[13px] font-medium text-[#F0F0F8]
  "Gap $222,930"   text-[13px] font-medium text-[#F0F0F8]
  "4 deals · ETA 10d"  text-[13px] text-[#8888A4]

Description: text-[12px] text-[#8888A4] mt-2

3 recovery cards (flex flex-row gap-3 mt-4):
  each: flex-1 bg-[#1C1C26] border border-[#2A2A38] rounded-[8px] p-4
  label: text-[11px] font-medium text-[#55556A] uppercase tracking-wide
  value: text-[16px] font-semibold text-[#F0F0F8] mt-1
  sub:   text-[12px] text-[#8888A4] mt-0.5
  "-1 enterprise deal"  "+$72,133 weighted"  "32% of gap"
  "+5pp conversion"     "+$49,182/month"     "22% of gap"
  "-4d cycle"           "+$90,167/day"       "40% of gap"

Owner row (flex justify-between items-center mt-4 pt-3 border-t border-[#2A2A38]):
  "Owner: Leila Zhang · Focus: top gap-filling deals · Due: before next forecast call"
  text-[12px] text-[#8888A4]
  [Open top 5 deals] Button variant="outline"
    h-[30px] text-[12px] border-[#2A2A38] text-[#8888A4] rounded-[8px]

Footer (mt-3 flex flex-col gap-0.5):
  "Fastest path: -4d cycle recovers 40% of gap."
  "Priority sequence: cycle time before net-new volume."
  both: text-[12px] text-[#55556A]
```
- [ ] Built

#### `src/components/analytics/RevenueRiskLedger.jsx`
```
shadcn Card: w-full | card-dark | padding: px-5 pt-5 pb-0
────────────────────────────────────────────────────────────
Header: flex justify-between items-start pb-3
  Left:
    "Revenue Risk Ledger"   text-[14px] font-semibold text-[#F0F0F8]
    "Accounts under..."     text-[12px] text-[#8888A4] mt-0.5
  Right:
    "10 Accounts"           text-[12px] font-medium text-[#8888A4]

Summary tiles (flex flex-row mt-3 pb-4 border-b border-[#2A2A38]):
  4 tiles: flex-1  border-l border-[#2A2A38] pl-4 (skip first)
  value: text-[16px] font-semibold text-[#F0F0F8]
  label: text-[11px] text-[#55556A] mt-0.5
  sub:   text-[11px] text-[#55556A]
  "1" Critical | "1" Escalations due | "31d" Inactivity | "$1,084,000" Overdue

Table header (bg-[#1C1C26]):
  text-[11px] font-medium text-[#55556A] py-2.5 px-3
  Account w-[200px] | Blocker flex-1 | Owner w-[100px]
  Idle w-[80px] | Close variance w-[100px] | Next action flex-1 | Risk Ladder w-[90px]

Rows: h-[~52px] border-b border-[#1F1F2B] hover:bg-[#1C1C26] py-3 px-3
  Account cell (flex flex-col):
    company:  text-[13px] font-medium text-[#F0F0F8]
    OPP-ID:   text-[12px] text-[#55556A] mt-0.5
    stage:    StatusBadge small variant
  Blocker:    text-[12px] text-[#8888A4]
  Owner:      text-[12px] text-[#F0F0F8]
  Idle/Variance: number text-[#F0F0F8] + "overdue" text-[#EF4444]  text-[12px]
  Next action: optional StatusBadge + text-[12px] text-[#8888A4]
  Risk Ladder badge (text-[12px] font-semibold px-2 py-1 rounded-[6px]):
    ≥ 80  bg-[#3B1212] text-[#EF4444]
    70-79 bg-[#3D2008] text-[#F97316]
    50-69 bg-[#2A2214] text-[#FBBF24]
    < 50  bg-[#1E1E28] text-[#55556A]
```
- [ ] Built

---

## 📊 Chart Files in `src/components/charts/`

### ⚠️ How Charts Connect to Components

| Chart File | Used By Component | Page | Chart # |
|---|---|---|---|
| `BarChart.jsx` | StatCardWithMiniBar | CRM | Chart 1 |
| `BarChart.jsx` | ProjectRevenueVsTargetCard | CRM | Chart 5 |
| `BarChart.jsx` | CashFlowOverviewCard | Finance | Chart 7 |
| `LineChart.jsx` | StatCardWithMiniLine | CRM | Chart 2 |
| `LineChart.jsx` | StatCardWithLine | CRM | Chart 3 |
| `PieChart.jsx` | LeadsBySourceCard | CRM | Chart 4 |
| `FunnelChart.jsx` | SalesPipelineCard | CRM | Chart 6 |
| `AreaChart.jsx` | RevenueHeroMetric | Analytics | Chart 9 |
| `ComposedChart.jsx` | ForecastVsTargetCard | Analytics | Chart 8 |

> `BarChart.jsx` is reused 3 times with different props/variants.
> `LineChart.jsx` is reused 2 times — mini (no dots) and full (with dots).
> Each chart file exports one default component that accepts props for customization.

---

### `src/components/charts/ComposedChart.jsx` — CREATE THIS FILE

```jsx
// COMPOSED CHART — Bar + Line combined
// ⚠️ This is the ONLY missing chart file — create it now.
// Used by: ForecastVsTargetCard in Analytics page (Chart 8)
//
// Bars:  weekly forecast → muted blue #1E2F5C (background context bars)
// Line:  attainment % →   accent blue #3B6FE8 (foreground trend line)
// ReferenceLine y=100: dashed 100% attainment target
// Replace forecastData with real weekly forecast + attainment data
// pv = forecast bar value | uv = attainment % (line)

import {
  ComposedChart as RechartsComposedChart,
  Bar, Line, XAxis, YAxis,
  CartesianGrid, Tooltip,
  ReferenceLine, ResponsiveContainer,
} from "recharts";

// Tooltip styles — shared dark theme across all charts
const tooltipStyle = {
  contentStyle: {
    background: "#1C1C26",
    border: "1px solid #2A2A38",
    borderRadius: "8px",
    padding: "6px 10px",
  },
  labelStyle:   { color: "#8888A4", fontSize: "11px", fontFamily: "Inter" },
  itemStyle:    { color: "#F0F0F8", fontSize: "12px", fontFamily: "Inter" },
};

// Replace with real weekly forecast + attainment data
const defaultData = [
  { name: "W1",  pv: 800,  uv: 60  },
  { name: "W2",  pv: 800,  uv: 58  },
  { name: "W3",  pv: 967,  uv: 72  },
  { name: "W4",  pv: 1098, uv: 85  },
  { name: "W5",  pv: 1200, uv: 78  },
  { name: "W6",  pv: 1108, uv: 90  },
  { name: "W7",  pv: 900,  uv: 82  },
  { name: "W8",  pv: 1050, uv: 95  },
  { name: "W9",  pv: 1150, uv: 100 },
  { name: "W10", pv: 1300, uv: 108 },
  { name: "W11", pv: 1400, uv: 115 },
  { name: "W12", pv: 680,  uv: 91  },
];

export default function ComposedChart({ data = defaultData, height = 200 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsComposedChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        barCategoryGap="10%"
        barGap={4}
      >
        {/* Faint horizontal grid only — no vertical lines */}
        <CartesianGrid vertical={false} stroke="#2A2A38" opacity={0.5} />

        {/* X axis — week labels W1–W12 */}
        <XAxis
          dataKey="name"
          tick={{ fill: "#8888A4", fontSize: 11, fontFamily: "Inter" }}
          axisLine={false}
          tickLine={false}
        />

        {/* Y axis — 0% to 200% attainment scale */}
        <YAxis
          tickFormatter={(v) => `${v}%`}
          domain={[0, 200]}
          ticks={[0, 50, 100, 150, 200]}
          tick={{ fill: "#8888A4", fontSize: 11, fontFamily: "Inter" }}
          axisLine={false}
          tickLine={false}
          width={40}
        />

        {/* Dashed 100% target line — attainment threshold */}
        <ReferenceLine
          y={100}
          stroke="#8888A4"
          strokeDasharray="4 4"
          strokeWidth={1}
        />

        {/* Forecast bars — muted blue background context */}
        <Bar
          dataKey="pv"
          fill="#1E2F5C"
          radius={[2, 2, 0, 0]}
          barSize={20}
        />

        {/* Attainment line — bright blue foreground signal */}
        <Line
          dataKey="uv"
          stroke="#3B6FE8"
          strokeWidth={2}
          type="monotone"
          dot={{ fill: "#3B6FE8", r: 3, stroke: "#16161E", strokeWidth: 2 }}
          activeDot={{ r: 5, fill: "#3B6FE8" }}
        />

        <Tooltip {...tooltipStyle} />
      </RechartsComposedChart>
    </ResponsiveContainer>
  );
}
```
- [ ] Created

---

## 📐 Spacing & Margin Reference

| Token | px | Where used |
|---|---|---|
| `p-4` | 16px | Main content area padding (DashboardLayout) |
| `gap-3` | 12px | Between ALL grid cards in every row |
| `gap-2` | 8px | Between elements inside cards |
| `px-5` | 20px | Card left + right padding |
| `pt-5` | 20px | Card top padding |
| `pb-5` | 20px | Card bottom padding |
| `pb-3` | 12px | CardHeader bottom padding only |
| `pt-0` | 0px | CardContent top (header provides the gap) |
| `mt-0.5` | 2px | Subtitle below card title |
| `mt-1` | 4px | Tight spacing between metric + delta |
| `mt-2` | 8px | Between chart and footer label |
| `mt-3` | 12px | Space above chart inside card |
| `mt-4` | 16px | Between major sections inside card |
| `mt-5` | 20px | Large gap (e.g. "High Reliability" in finance) |
| `py-2` | 8px | Table header row + detail rows |
| `py-2.5` | 10px | Payment list rows |
| `py-3` | 12px | Table data rows |
| `px-3` | 12px | Sidebar nav items + table cells |
| `pb-4` | 16px | Stat card bottom (shorter than pb-5) |
| `mt-auto` | auto | Sidebar user profile pushed to bottom |
| `h-[32px]` | 32px | Standard button height |
| `h-[36px]` | 36px | Primary action buttons (Manage Card) |
| `h-[52px]` | 52px | Topbar fixed height |
| `w-[200px]` | 200px | Sidebar fixed width |

---

## ⚡ Quick Reference — Missing Items Only

```bash
# Files to CREATE (do not modify existing files):

src/
├── router/
│   └── index.jsx              ← new file
├── components/
│   ├── charts/
│   │   └── ComposedChart.jsx  ← new file (only missing chart)
│   ├── shared/
│   │   ├── StatusBadge.jsx    ← new file
│   │   └── DeltaBadge.jsx     ← new file
│   ├── sidebar/
│   │   ├── Sidebar.jsx        ← new file
│   │   └── SidebarNavItem.jsx ← new file
│   ├── topbar/
│   │   └── Topbar.jsx         ← new file
│   ├── crm/                   ← new folder + 10 new files
│   ├── finance/               ← new folder + 9 new files
│   └── analytics/             ← new folder + 7 new files
└── lib/
    └── badgeColors.js         ← new file

# Files to UPDATE (minimal changes only):
src/main.jsx                   ← add RouterProvider
src/layout/DashboardLayout.jsx ← verify Outlet is wired
```

---

> **Senior Developer Note:**
> The `src/components/ui/` folder is complete — do not touch it.
> The `src/components/charts/` folder has 5 of 6 charts — only add `ComposedChart.jsx`.
> All 3 page files exist in `src/pages/` — only wire the imports inside them.
> The `src/layout/DashboardLayout.jsx` exists — only verify `<Outlet />` is present.
> Treat every component spec in this README as the exact implementation contract.
> Margin and padding values are non-negotiable — match them pixel-perfect from the Figma.

https://www.figma.com/design/E8z1oS914A65Wws0Fbfbaz/Untitled?node-id=0-1&p=f&t=bFPH9ejIZthuDTgF-0