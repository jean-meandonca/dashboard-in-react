export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold">Visão Geral</h1>
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Nova ação
      </button>
    </header>
  );
}
