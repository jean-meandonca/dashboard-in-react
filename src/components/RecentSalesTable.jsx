import { useEffect, useState } from "react";
import "./RecentSalesTable.css";

export default function RecentSalesTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/recentSales.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => setData([]));
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h3 className="text-xl font-semibold mb-4">Vendas Recentes</h3>

      <table className="w-full border-collapse sales-table">
        <thead>
          <tr className="border-b">
            <th className="pb-2">Cliente</th>
            <th className="pb-2">Valor</th>
            <th className="pb-2">Data</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b last:border-none">
              <td className="py-2">{item.client}</td>
              <td className="py-2">R$ {item.amount.toFixed(2)}</td>
              <td className="py-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
