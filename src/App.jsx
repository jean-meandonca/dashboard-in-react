import './App.css'
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Card from "./components/Card";
import SalesChart from "./components/SalesChart";


function App() {
   const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
      <div className="flex h-screen">
      
        <Sidebar open={sidebarOpen} />

        <main className="flex-1 bg-gray-100 p-6">

          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          <section>
              <Card title="Vendas" value="R$ 12.450" icon="shopping-cart" />
              <Card title="Usuários" value="1.239" icon="users" />
              <Card title="Conversões" value="3.2%" icon="trending-up" />
          </section>

          <section className="mt-6">
              <SalesChart />
          </section>


        </main>

    </div>
  );
}

export default App
