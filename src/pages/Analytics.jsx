import Card from "../components/Card";
import SalesChart from "../components/SalesChart";

export default function Analytics() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Analytics</h2>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Vendas" value="R$ 12.450" icon="shopping-cart" />
        <Card title="Usuários" value="1.239" icon="users" />
        <Card title="Conversões" value="3.2%" icon="trending-up" />
      </section>

      <section className="mt-6">
        <SalesChart />
      </section>
    </div>
  );
}
