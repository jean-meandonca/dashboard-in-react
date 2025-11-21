
import './App.css'

function App() {

  return (
      <div className="flex h-screen">

        <aside className="w-64 bg-white shadow-lg p-4">
          Sidebar
        </aside>

        <main className="flex-1 bg-gray-100 p-6">

          <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Visão Geral</h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Nova ação
            </button>
          </header>

          <section>
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Vendas</h3>
              <p className="text-3xl font-bold">R$ 12.450</p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Usuários</h3>
              <p className="text-3xl font-bold">1.239</p>
            </div>

            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Conversões</h3>
              <p className="text-3xl font-bold">3.2%</p>
            </div>

          </section>

        </main>

    </div>
  );
}

export default App
