import { useState } from "react";
import { Menu, Search, Bell } from "lucide-react";

export default function Header({ search, onSearch, onMenu }) {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <header className="header">
      <button className="icon-btn menu-btn" onClick={onMenu} aria-label="Open menu">
        <Menu size={22} />
      </button>
      <h1>Banking Products</h1>

      <div className="search">
        <Search size={16} />
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search by name or category"
        />
      </div>

      <div className="notify">
        <button className="icon-btn" onClick={() => setShowNotes(!showNotes)} aria-label="Notifications">
          <Bell size={20} />
          <span className="dot" />
        </button>
        {showNotes && (
          <div className="dropdown">
            <p>Personal Loan EMI due on 15 Nov 2026</p>
            <p>Wealth Investment Plan awaiting completion</p>
          </div>
        )}
      </div>

      <div className="profile">
        <div className="avatar">HI</div>
        <div className="profile-text">
          <strong>Hello user</strong>
          <small>Welcome back!</small>
        </div>
      </div>
    </header>
  );
}