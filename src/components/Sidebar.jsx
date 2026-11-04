import { LayoutDashboard, Layers, PiggyBank, CreditCard, Landmark, TrendingUp, Building2, X } from "lucide-react";
const items = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "All Products", icon: Layers },
  { name: "Savings", icon: PiggyBank },
  { name: "Credit Cards", icon: CreditCard },
  { name: "Loans", icon: Landmark },
  { name: "Investments", icon: TrendingUp },
];

export default function Sidebar({ active, onSelect, open, onClose }) {
  return (
    <>
      {open && <div className="overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="logo">
          <Building2 size={26} />
          <span>Lakson Bank</span>
          <button className="icon-btn close-nav" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav>
          {items.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className={`nav-item ${active === name ? "active" : ""}`}
              onClick={() => onSelect(name)}
            >
              <Icon size={18} /> {name}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}