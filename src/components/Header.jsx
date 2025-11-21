import { Menu } from "lucide-react";

export default function Header({ toggleSidebar }) {
  return (
     <header className="flex justify-between items-center mb-6">

      <button
        onClick={toggleSidebar}
        className="p-2 bg-gray-200 rounded hover:bg-gray-300 md:hidden"
      >
        <Menu size={24} />
      </button>

      <h1 className="text-3xl font-semibold">Visão Geral</h1>

      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Nova ação
      </button>
    </header>
  );
}
