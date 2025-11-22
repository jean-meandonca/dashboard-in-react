// src/pages/Analytics.jsx
import Card from "../components/Card";
import SalesChart from "../components/SalesChart";
import RecentSalesTable from "../components/RecentSalesTable";

export default function Analytics() {
  return (
    <div className="space-y-6"> {/* garante espaçamento vertical entre blocos */}
      <h2 className="text-2xl font-bold mb-2">Analytics</h2>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Vendas" value="R$ 12.450" icon="shopping-cart" />
        <Card title="Usuários" value="1.239" icon="users" />
        <Card title="Conversões" value="3.2%" icon="trending-up" />
      </section>

      <section>
        <SalesChart />
      </section>

      <section>
        <RecentSalesTable />
      </section>
    </div>
  );
}
