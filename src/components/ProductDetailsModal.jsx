import { useState } from "react";
import { X } from "lucide-react";
import { icons } from "./ProductCard";
import { Landmark } from "lucide-react";
export default function ProductDetailsModal({ product, onClose, onToast }) {
  const Icon = icons[product.icon];
  const [busy, setBusy] = useState(false);

  const action = () => {
    setBusy(true);
    onToast(`Application for ${product.name} resumed successfully.`);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="icon-btn modal-x" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <div className="card-icon"><Icon size={24} /></div>
        <h2>{product.name}</h2>
        <div className="modal-tags">
          <small className="category">{product.category}</small>
          <span className={`badge ${product.status.toLowerCase()}`}>{product.status}</span>
        </div>
        <p>{product.description}</p>
        <div className="metrics">
          {product.metrics.map((m) => (
            <div key={m.label}>
              <small>{m.label}</small>
              <strong>{m.value}</strong>
            </div>
          ))}
        </div>
        <div className="modal-actions">
          {product.status === "Pending" && (
            <button className="btn" onClick={action} disabled={busy}>Continue Application</button>
          )}
          <button className="btn-outline" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}