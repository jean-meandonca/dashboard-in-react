// src/components/SalesChart.jsx
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function SalesChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/sales.json")
      .then((res) => res.json())
      .then((json) => setData(json.monthlySales))
      .catch(() => setData([]));
  }, []);

  return (
    <div
      className="bg-white p-6 rounded-xl shadow w-full mb-6"
      style={{ height: 300 }} // <- altura fixa e controlada
    >
      <h3 className="text-xl font-semibold mb-4">Vendas Mensais</h3>

      {/* Use height="100%" quando o wrapper tem height definido */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
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
