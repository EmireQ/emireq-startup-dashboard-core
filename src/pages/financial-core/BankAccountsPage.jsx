import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiDollarSign,
  FiRefreshCw,
  FiCreditCard,
  FiSearch,
  FiChevronDown,
  FiGrid,
  FiList,
  FiExternalLink,
  FiPlus,
  FiCheckSquare,
} from "react-icons/fi";
import { TbBuildingBank } from "react-icons/tb";
import FinancialSidebar from "../../components/financial-sidebar/FinancialSidebar";
import Header from "./Header";
import LogoutConfirmModal from "../../components/logout-modal/LogoutConfirmModal";
import "./BankAccountsPage.css";

const ACCOUNTS = [
  {
    id: 1,
    name: "Business Checking – Primary",
    bank: "Chase Bank",
    mask: "****6789",
    balance: 248750.0,
    status: "Connected",
    type: "Checking",
    negative: false,
  },
  {
    id: 2,
    name: "Business Savings",
    bank: "Bank of America",
    mask: "****6789",
    balance: 500000.0,
    status: "Connected",
    type: "Savings",
    negative: false,
  },
  {
    id: 3,
    name: "Corporate Credit Card",
    bank: "American Express",
    mask: "****6789",
    balance: 12450.0,
    status: "Connected",
    type: "Credit Card",
    negative: true,
  },
  {
    id: 4,
    name: "Payroll Account",
    bank: "Wells Fargo",
    mask: "****6789",
    balance: 485000.0,
    status: "Connected",
    type: "Checking",
    negative: false,
  },
  {
    id: 5,
    name: "Reserve Fund",
    bank: "City Bank",
    mask: "****6789",
    balance: 750000.0,
    status: "Connected",
    type: "Savings",
    negative: false,
  },
];

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

export default function BankAccountsPage() {
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

  const filtered = ACCOUNTS.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.bank.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "All Type" || a.type === typeFilter;
    const matchesStatus = statusFilter === "All Status" || a.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalBalance = ACCOUNTS.reduce((s, a) => s + a.balance, 0);

  return (
    <div className={`bank-accounts-page ${isDarkMode ? "dark-mode" : ""}`}>
      <FinancialSidebar
        onLogout={() => setShowLogoutModal(true)}
        isDarkMode={isDarkMode}
        activePage="banking"
      />

      <div className="bank-accounts-main">
        <Header isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode((p) => !p)} />

        <main className="bank-accounts-content">
          {/* Page Header */}
          <div className="ba-page-header">
            <div>
              <h1>Bank Accounts</h1>
              <p>Manage your connected Bank accounts and balances.</p>
            </div>
            <button className="ba-add-btn">
              <FiPlus size={16} />
              Add Account
            </button>
          </div>

          {/* Stat Cards */}
          <div className="ba-stats-grid">
            <div className="ba-stat-card">
              <div className="ba-stat-top">
                <span className="ba-stat-label">Total Balance</span>
                <span className="ba-stat-icon ba-stat-icon--blue">
                  <FiDollarSign size={16} />
                </span>
              </div>
              <div className="ba-stat-value">{formatCurrency(totalBalance)}</div>
              <div className="ba-stat-sub green">Across active accounts</div>
            </div>

            <div className="ba-stat-card">
              <div className="ba-stat-top">
                <span className="ba-stat-label">Active Accounts</span>
                <span className="ba-stat-icon ba-stat-icon--green">
                  <TbBuildingBank size={16} />
                </span>
              </div>
              <div className="ba-stat-value">4</div>
              <div className="ba-stat-sub">Connected banks</div>
            </div>

            <div className="ba-stat-card">
              <div className="ba-stat-top">
                <span className="ba-stat-label">Last Synced</span>
                <span className="ba-stat-icon ba-stat-icon--purple">
                  <FiRefreshCw size={16} />
                </span>
              </div>
              <div className="ba-stat-value">9:30 AM</div>
              <div className="ba-stat-sub">Today</div>
            </div>

            <div className="ba-stat-card">
              <div className="ba-stat-top">
                <span className="ba-stat-label">Credit Available</span>
                <span className="ba-stat-icon ba-stat-icon--orange">
                  <FiCreditCard size={16} />
                </span>
              </div>
              <div className="ba-stat-value">{formatCurrency(37550)}</div>
              <div className="ba-stat-sub">Credit card limit</div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="ba-toolbar-wrapper">
            <div className="ba-toolbar">
              <div className="ba-search-wrap">
                <FiSearch size={15} className="ba-search-icon" />
                <input
                  className="ba-search-input"
                  placeholder="Search bank accounts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="ba-filters">
                <div className="ba-select-wrap">
                  <select
                    className="ba-select"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option>All Type</option>
                    <option>Checking</option>
                    <option>Savings</option>
                    <option>Credit Card</option>
                  </select>
                  <FiChevronDown size={14} className="ba-select-chevron" />
                </div>

                <div className="ba-select-wrap">
                  <select
                    className="ba-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option>All Status</option>
                    <option>Connected</option>
                    <option>Disconnected</option>
                  </select>
                  <FiChevronDown size={14} className="ba-select-chevron" />
                </div>

                <div className="ba-view-toggle">
                  <button
                    className={`ba-view-btn ${viewMode === "grid" ? "active" : ""}`}
                    onClick={() => setViewMode("grid")}
                    title="Grid view"
                  >
                    <FiGrid size={16} />
                  </button>
                  <button
                    className={`ba-view-btn ${viewMode === "list" ? "active" : ""}`}
                    onClick={() => setViewMode("list")}
                    title="List view"
                  >
                    <FiList size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Account Cards */}
            <div className={`ba-accounts-grid ${viewMode === "list" ? "list-view" : ""}`}>
              {filtered.map((account) => (
                <div key={account.id} className="ba-account-card">
                  <div className="ba-card-header">
                    <div className="ba-card-icon">
                      <TbBuildingBank size={20} />
                    </div>
                    <span className="ba-card-status">{account.status}</span>
                  </div>

                  <div className="ba-card-name">{account.name}</div>
                  <div className="ba-card-bank">
                    {account.bank} • {account.mask}
                  </div>

                  <div className="ba-card-balance-label">AVAILABLE BALANCE</div>
                  <div className={`ba-card-balance ${account.negative ? "negative" : ""}`}>
                    {account.negative ? "-" : ""}
                    {formatCurrency(account.balance)}
                  </div>

                  <div className="ba-card-footer">
                    <button className="ba-view-transactions">
                      View Transactions <FiExternalLink size={12} />
                    </button>
                    <button className="ba-refresh-btn" title="Sync">
                      <FiRefreshCw size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="ba-footer-note">
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
