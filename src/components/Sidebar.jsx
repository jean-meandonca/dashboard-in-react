import { Home, BarChart3, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <nav className="space-y-2">
        <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-200" href="#">
          <Home size={20} /> Home
        </a>

        <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-200" href="#">
          <BarChart3 size={20} /> Analytics
        </a>

        <a className="flex items-center gap-3 p-2 rounded hover:bg-gray-200" href="#">
          <Settings size={20} /> Configurações
        </a>
      </nav>
    </aside>
  );
}
