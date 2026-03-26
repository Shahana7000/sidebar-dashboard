import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#0A0A0F] font-sans overflow-hidden">
      {/* LEFT — Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* RIGHT — Topbar + scrollable page content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar onToggleSidebar={() => setSidebarOpen((p) => !p)} />

        <main className="flex-1 overflow-y-auto no-scrollbar bg-[#0A0A0F] p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
