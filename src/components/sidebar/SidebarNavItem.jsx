import { NavLink } from "react-router-dom";

export default function SidebarNavItem({ to, label, icon: Icon, exact = false, soon = false, collapsed = false }) {
  return (
    <NavLink
      to={soon ? "#" : to}
      end={exact}
      onClick={soon ? (e) => e.preventDefault() : undefined}
      title={collapsed ? label : undefined}
      className={({ isActive }) =>
        `flex items-center justify-between rounded-[8px] text-[13px] font-medium transition-colors whitespace-nowrap ${
          collapsed ? "px-0 py-2 justify-center" : "px-3 py-2"
        } ${
          isActive && !soon
            ? "bg-[#1E1E28] text-[#F0F0F8]"
            : "text-[#8888A4] hover:bg-[#1C1C26] hover:text-[#F0F0F8]"
        }`
      }
    >
      {collapsed ? (
        <div className="flex items-center justify-center w-full">
          {Icon && <Icon size={16} />}
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2.5">
            {Icon && <Icon size={16} className="flex-shrink-0" />}
            <span>{label}</span>
          </div>
          {soon && (
            <span className="bg-[#1E1E28] text-[#55556A] text-[10px] px-1.5 py-0.5 rounded-[4px] border border-[#2A2A38]">
              Soon
            </span>
          )}
        </>
      )}
    </NavLink>
  );
}
