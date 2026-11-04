import { PiggyBank, CreditCard, Landmark, TrendingUp, Wallet, Building2 } from "lucide-react";

export const icons = { PiggyBank, CreditCard, Landmark, TrendingUp, Vault: Wallet, Home: Building2 };
export default function ProductCard({ product, onOpen }) {
const Icon = icons[product.icon] || Landmark;
  return (
    <article className="card">
      <div className="card-top">
        <div className="card-icon"><Icon size={22} /></div>
        <span className={`badge ${product.status.toLowerCase()}`}>{product.status}</span>
      </div>
      <h3>{product.name}</h3>
      <small className="category">{product.category}</small>
      <div className="metrics">
        {product.metrics.map((m) => (
          <div key={m.label}>
            <small>{m.label}</small>
            <strong>{m.value}</strong>
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => onOpen(product)}>{product.cta}</button>
    </article>
  );
}