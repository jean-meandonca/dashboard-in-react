export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <nav className="space-y-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200">Home</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200">Analytics</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200">Configurações</a>
      </nav>
    </aside>
  );
}
