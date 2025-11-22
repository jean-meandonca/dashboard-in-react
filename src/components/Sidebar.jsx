import { NavLink } from "react-router-dom";
import { Home, BarChart3, Settings } from "lucide-react";

export default function Sidebar({ open }) {
  return (
    <aside
      className={`bg-white shadow-lg p-4 h-full transition-all duration-300
                  ${open ? "w-64" : "w-0 overflow-hidden"}`}
    >
      {open && (
        <>
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

          <nav className="space-y-2">
            <NavLink to="/" className="flex items-center gap-4 p-2 rounded hover:bg-gray-200"
            style={{ columnGap: "1rem" }}>
              <Home size={20} /> Home
            </NavLink>
            <NavLink to="/analytics" className="flex items-center gap-4 p-2 rounded hover:bg-gray-200"
            style={{ columnGap: "1rem" }}>
              <BarChart3 size={20} /> Analytics
            </NavLink>
            <NavLink to="/settings" className="flex items-center gap-4 p-2 rounded hover:bg-gray-200"
            style={{ columnGap: "1rem" }}>
              <Settings size={20} /> Configurações
            </NavLink>
          </nav>
        </>
      )}
    </aside>
  );
}
