import { ShoppingCart, Users, TrendingUp } from "lucide-react";

export default function Card({ title, value, icon }) {
  const icons = {
    "shopping-cart": <ShoppingCart size={32} />,
    "users": <Users size={32} />,
    "trending-up": <TrendingUp size={32} />,
  };

  return (
    <div className="p-6 bg-white shadow rounded-xl flex items-center gap-4">
      <div className="text-blue-600">
        {icons[icon]}
      </div>

      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
}
