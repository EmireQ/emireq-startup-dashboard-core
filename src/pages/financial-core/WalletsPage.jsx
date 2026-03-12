import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiChevronDown,
  FiGrid,
  FiList,
  FiExternalLink,
  FiPlus,
  FiCheckCircle,
  FiCreditCard,
  FiZap,
} from "react-icons/fi";
import { TbWallet } from "react-icons/tb";
import FinancialSidebar from "../../components/financial-sidebar/FinancialSidebar";
import Header from "./Header";
import LogoutConfirmModal from "../../components/logout-modal/LogoutConfirmModal";
import "./WalletsPage.css";

const WALLETS = [
  {
    id: 1,
    name: "Stripe Business Account",
    provider: "Stripe",
    accountId: "STRIPE-2024-001",
    balance: 45230.0,
    status: "Connected",
    type: "Payment Gateway",
  },
  {
    id: 2,
    name: "PayPal Business",
    provider: "PayPal",
    accountId: "PAYPAL-2024-001",
    balance: 18950.0,
    status: "Connected",
    type: "Payment Gateway",
  },
  {
    id: 3,
    name: "Wise Multi-Currency",
    provider: "Wise",
    accountId: "WISE-2024-001",
    balance: 32400.0,
    status: "Connected",
    type: "Digital Wallet",
  },
  {
    id: 4,
    name: "Coinbase Business Wallet",
    provider: "Coinbase",
    accountId: "CRYPTO-2024-001",
    balance: 85600.0,
    status: "Connected",
    type: "Crypto",
  },
  {
    id: 5,
    name: "Square Cash App",
    provider: "Square",
    accountId: "SQUARE-2024-001",
    balance: 12800.0,
    status: "Connected",
    type: "Payment Gateway",
  },
];

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

export default function WalletsPage() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Type");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [viewMode, setViewMode] = useState("grid");

  const handleConfirmLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    setShowLogoutModal(false);
    navigate("/auth/login");
  };

  const filtered = WALLETS.filter((w) => {
    const matchesSearch =
      w.name.toLowerCase().includes(search.toLowerCase()) ||
      w.provider.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "All Type" || w.type === typeFilter;
    const matchesStatus = statusFilter === "All Status" || w.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalBalance = WALLETS.reduce((s, w) => s + w.balance, 0);

  return (
    <div className={`wallets-page ${isDarkMode ? "dark-mode" : ""}`}>
      <FinancialSidebar
        onLogout={() => setShowLogoutModal(true)}
        isDarkMode={isDarkMode}
        activePage="banking"
      />

      <div className="wallets-main">
        <Header isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode((p) => !p)} />

        <main className="wallets-content">
          {/* Page Header */}
          <div className="wl-page-header">
            <div>
              <h1>Wallets</h1>
              <p>Digital Wallets and payment gateway balances.</p>
            </div>
            <button className="wl-add-btn">
              <FiPlus size={16} />
              Add Wallet
            </button>
          </div>

          {/* Stat Cards */}
          <div className="wl-stats-grid">
            <div className="wl-stat-card">
              <div className="wl-stat-top">
                <span className="wl-stat-label">Total Balance</span>
                <span className="wl-stat-icon wl-stat-icon--purple">
                  <TbWallet size={16} />
                </span>
              </div>
              <div className="wl-stat-value">{formatCurrency(totalBalance)}</div>
              <div className="wl-stat-sub green">Across active wallets</div>
            </div>

            <div className="wl-stat-card">
              <div className="wl-stat-top">
                <span className="wl-stat-label">Active Wallets</span>
                <span className="wl-stat-icon wl-stat-icon--green">
                  <FiCheckCircle size={16} />
                </span>
              </div>
              <div className="wl-stat-value">4</div>
              <div className="wl-stat-sub">Connected wallets</div>
            </div>

            <div className="wl-stat-card">
              <div className="wl-stat-top">
                <span className="wl-stat-label">Payment Gateways</span>
                <span className="wl-stat-icon wl-stat-icon--blue">
                  <FiCreditCard size={16} />
                </span>
              </div>
              <div className="wl-stat-value">2</div>
              <div className="wl-stat-sub">Stripe, Square</div>
            </div>

            <div className="wl-stat-card">
              <div className="wl-stat-top">
                <span className="wl-stat-label">Crypto Wallets</span>
                <span className="wl-stat-icon wl-stat-icon--yellow">
                  <FiZap size={16} />
                </span>
              </div>
              <div className="wl-stat-value">1</div>
              <div className="wl-stat-sub">Coinbase</div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="wl-toolbar-wrapper">
            <div className="wl-toolbar">
              <div className="wl-search-wrap">
                <FiSearch size={15} className="wl-search-icon" />
                <input
                  className="wl-search-input"
                  placeholder="Search Wallets..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="wl-filters">
                <div className="wl-select-wrap">
                  <select
                    className="wl-select"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option>All Type</option>
                    <option>Payment Gateway</option>
                    <option>Crypto</option>
                    <option>Digital Wallet</option>
                  </select>
                  <FiChevronDown size={14} className="wl-select-chevron" />
                </div>

                <div className="wl-select-wrap">
                  <select
                    className="wl-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option>All Status</option>
                    <option>Connected</option>
                    <option>Disconnected</option>
                  </select>
                  <FiChevronDown size={14} className="wl-select-chevron" />
                </div>

                <div className="wl-view-toggle">
                  <button
                    className={`wl-view-btn ${viewMode === "grid" ? "active" : ""}`}
                    onClick={() => setViewMode("grid")}
                    title="Grid view"
                  >
                    <FiGrid size={16} />
                  </button>
                  <button
                    className={`wl-view-btn ${viewMode === "list" ? "active" : ""}`}
                    onClick={() => setViewMode("list")}
                    title="List view"
                  >
                    <FiList size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Wallet Cards */}
            <div className={`wl-wallets-grid ${viewMode === "list" ? "list-view" : ""}`}>
              {filtered.map((wallet) => (
                <div key={wallet.id} className="wl-wallet-card">
                  <div className="wl-card-header">
                    <div className="wl-card-icon">
                      <TbWallet size={20} />
                    </div>
                    <span className="wl-card-status">{wallet.status}</span>
                  </div>

                  <div className="wl-card-name">{wallet.name}</div>
                  <div className="wl-card-provider">
                    {wallet.provider} • {wallet.accountId}
                  </div>

                  <div className="wl-card-balance-label">AVAILABLE BALANCE</div>
                  <div className="wl-card-balance">{formatCurrency(wallet.balance)}</div>

                  <div className="wl-card-footer">
                    <button className="wl-view-transactions">
                      View Transactions <FiExternalLink size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="wl-footer-note">
              Market data is updated in real-time. Prices are for reference only and may vary across exchanges.
            </div>
          </div>
        </main>
      </div>

      {showLogoutModal && (
        <LogoutConfirmModal
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleConfirmLogout}
        />
      )}
    </div>
  );
}
