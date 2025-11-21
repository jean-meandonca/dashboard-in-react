export default function Card({ title, value }) {
  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
