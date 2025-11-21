import './App.css'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {

  return (
      <div className="flex h-screen">

        <Sidebar/>

        <main className="flex-1 bg-gray-100 p-6">

          <Header/>

          <section>
              <Card title="Vendas" value="R$ 12.450" />
              <Card title="Usuários" value="1.239" />
              <Card title="Conversões" value="3.2%" />
          </section>

        </main>

    </div>
  );
}

export default App
