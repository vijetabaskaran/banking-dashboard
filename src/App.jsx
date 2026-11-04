import { useState } from "react";
import { products } from "./data/products";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OverviewCards from "./components/OverviewCards";
import CategoryFilters from "./components/CategoryFilters";
import ProductCard from "./components/ProductCard";
import ProductDetailsModal from "./components/ProductDetailsModal";
import "./styles/global.css";
import "./styles/dashboard.css";
import "./styles/components.css";

const navToCategory = {
  Dashboard: "All Products",
  "All Products": "All Products",
  Savings: "Savings",
  "Credit Cards": "Credit Card",
  Loans: "Loan",
  Investments: "Investment",
};

export default function App() {
  const [nav, setNav] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [status, setStatus] = useState("All");
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const handleNav = (name) => {
    setMenuOpen(false);
    if (name === "Settings") return showToast("Settings is not available in this demo.");
    setNav(name);
    setCategory(navToCategory[name]);
  };

  const handleCategory = (c) => {
    setCategory(c);
    setNav(c === "All Products" ? "All Products" : Object.keys(navToCategory).find((k) => navToCategory[k] === c));
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All Products");
    setStatus("All");
    setNav("Dashboard");
  };

  const q = search.trim().toLowerCase();
  const filtered = products.filter(
    (p) =>
      (category === "All Products" || p.category === category) &&
      (status === "All" || p.status === status) &&
      (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  );

  return (
    <div className="layout">
      <Sidebar active={nav} onSelect={handleNav} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="main">
        <Header search={search} onSearch={setSearch} onMenu={() => setMenuOpen(true)} />
        <OverviewCards products={products} />
        <CategoryFilters
          category={category}
          status={status}
          onCategory={handleCategory}
          onStatus={setStatus}
          onClear={clearFilters}
          count={filtered.length}
        />
        {filtered.length ? (
          <section className="grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={setSelected} />
            ))}
          </section>
        ) : (
          <div className="empty">
            <h3>No products found</h3>
            <p>Try changing your search or filters.</p>
            <button className="btn" onClick={clearFilters}>Clear Filters</button>
          </div>
        )}
      </main>
      {selected && (
        <ProductDetailsModal product={selected} onClose={() => setSelected(null)} onToast={showToast} />
      )}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}