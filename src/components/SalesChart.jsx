import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Fev", value: 800 },
  { name: "Mar", value: 600 },
  { name: "Abr", value: 1200 },
  { name: "Mai", value: 900 },
  { name: "Jun", value: 1500 },
];

export default function SalesChart() {
  return (
   <div className="bg-white p-6 rounded-xl shadow w-full" style={{ height: 300 }}>
      <h3 className="text-xl font-semibold mb-4">Vendas Mensais</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
