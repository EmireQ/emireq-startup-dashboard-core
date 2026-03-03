import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FinancialSidebar from '../../components/financial-sidebar/FinancialSidebar';
import Header from './Header';
import LogoutConfirmModal from '../../components/logout-modal/LogoutConfirmModal';
import './PurchasesPage.css';

export default function PurchasesPage() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('vendors');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [methodFilter, setMethodFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddVendor, setShowAddVendor] = useState(false);
  const [approvalStatuses, setApprovalStatuses] = useState({});
  const [debitNoteSearch, setDebitNoteSearch] = useState('');
  const [debitNoteStatusFilter, setDebitNoteStatusFilter] = useState('all');
  const [debitNotePage, setDebitNotePage] = useState(1);

  const handleApprove = (id) => {
    setApprovalStatuses(prev => ({ ...prev, [id]: 'approved' }));
  };

  const handleReject = (id) => {
    setApprovalStatuses(prev => ({ ...prev, [id]: 'rejected' }));
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    setShowLogoutModal(false);
    navigate("/auth/login");
  };

  const tabs = [
    { id: 'vendors', label: 'Vendors' },
    { id: 'bills', label: 'Bills' },
    { id: 'payments', label: 'Payments' },
    { id: 'approvals', label: 'Approvals' },
    { id: 'debt-notes', label: 'Debt Notes' }
  ];

  const vendors = [
    {
      id: 'VEN-001',
      name: 'CloudTech Solutions Inc',
      email: 'billing@cloudsol.com',
      phone: '+1 (555) 123-4567',
      category: 'IT & Software',
      totalBilled: '$45,000',
      status: 'Active'
    },
    {
      id: 'VEN-002',
      name: 'Office Supplies Pro',
      email: 'accounts@officesuppl...',
      phone: '+1 (555) 123-4568',
      category: 'Office Supplies',
      totalBilled: '$12,000',
      status: 'Active'
    },
    {
      id: 'VEN-003',
      name: 'Global Consulting Partners',
      email: 'invoices@globco...',
      phone: '+1 (555) 123-4569',
      category: 'Professional Services',
      totalBilled: '$3,200',
      status: 'Active'
    },
    {
      id: 'VEN-004',
      name: 'Marketing Agency Plus',
      email: 'finance@marketingpl...',
      phone: '+1 (555) 123-4570',
      category: 'Marketing',
      totalBilled: '$28,000',
      status: 'In Active'
    }
  ];

  const bills = [
    {
      id: 'INV-2024-001',
      vendorName: 'Cloud Services Inc',
      issueDate: 'Jan 15, 2026',
      dueDate: 'Feb 14, 2026',
      totalBilled: '$12,500.00',
      status: 'Pending',
      category: 'IT & Software'
    },
    {
      id: 'INV-2024-002',
      vendorName: 'Global Logistics',
      issueDate: 'Jan 20, 2026',
      dueDate: 'Mar 6, 2026',
      totalBilled: '$35,000.00',
      status: 'Unpaid',
      category: 'Office Supplies'
    },
    {
      id: 'INV-2024-003',
      vendorName: 'Office Supplies Co',
      issueDate: 'Jan 10, 2026',
      dueDate: 'Jan 25, 2026',
      totalBilled: '$1,250.00',
      partialAmount: '$1,250.00',
      status: 'Paid',
      category: 'Professional Services'
    },
    {
      id: 'INV-2024-004',
      vendorName: 'Marketing Pros',
      issueDate: 'Jan 5, 2026',
      dueDate: 'Jan 18, 2026',
      totalBilled: '$3,200.00',
      status: 'Overdue',
      category: 'Marketing',
      isOverdue: true
    }
  ];

  const payments = [
    {
      id: 'PAY-2026-001',
      payId: 'PAY-001',
      vendorName: 'Cloud Services Inc',
      paymentDate: 'Jan 15, 2026',
      totalBilled: '$1,250.00',
      paymentMethod: 'Bank Transfer',
      reference: 'TXN-REF-001',
      status: 'Completed'
    },
    {
      id: 'PAY-2026-002',
      payId: 'PAY-002',
      vendorName: 'Global Logistics',
      paymentDate: 'Jan 20, 2026',
      totalBilled: '$4,800.00',
      paymentMethod: 'Wire Transfer',
      reference: 'TXN-REF-002',
      status: 'Completed'
    },
    {
      id: 'PAY-2026-003',
      payId: 'PAY-003',
      vendorName: 'Office Supplies Co',
      paymentDate: 'Jan 10, 2026',
      totalBilled: '$6,500.00',
      paymentMethod: 'Bank Transfer',
      reference: 'TXN-REF-003',
      status: 'Pending'
    },
    {
      id: 'PAY-2026-004',
      payId: 'PAY-004',
      vendorName: 'Marketing Pros',
      paymentDate: 'Jan 5, 2026',
      totalBilled: '$2,400.00',
      paymentMethod: 'Check',
      reference: 'CHK-1245',
      status: 'Completed'
    }
  ];

  const approvals = [
    {
      id: 'APR-001',
      type: 'Bill Approval Required',
      requestedBy: 'John Doe',
      date: '2024-02-24',
      amount: '$5,000',
    },
    {
      id: 'APR-002',
      type: 'Payment Approval Required',
      requestedBy: 'John Doe',
      date: '2024-02-24',
      amount: '$12,000',
    },
    {
      id: 'APR-003',
      type: 'Bill Approval Required',
      requestedBy: 'Jane Smith',
      date: '2024-02-20',
      amount: '$3,400',
    },
    {
      id: 'APR-004',
      type: 'Payment Approval Required',
      requestedBy: 'Jane Smith',
      date: '2024-02-18',
      amount: '$8,750',
    },
  ];

  const debitNotes = [
    {
      id: 'DN-001',
      vendor: 'CloudTech Solutions Inc.',
      issueDate: '2026-01-25',
      amount: '$850.00',
      reason: 'Services not delivered as per agreement',
      status: 'Accepted',
    },
    {
      id: 'DN-002',
      vendor: 'Office Supplies Pro',
      issueDate: '2026-01-26',
      amount: '$320.00',
      reason: 'Damaged goods received',
      status: 'Sent',
    },
    {
      id: 'DN-003',
      vendor: 'Marketing Agency Plus',
      issueDate: '2026-01-27',
      amount: '$1,200.00',
      reason: 'Incorrect billing – overcharged',
      status: 'Accepted',
    },
    {
      id: 'DN-004',
      vendor: 'Global Consulting Partners',
      issueDate: '2026-01-28',
      amount: '$670.00',
      reason: 'Partial service cancellation',
      status: 'Pending',
    },
    {
      id: 'DN-005',
      vendor: 'CloudTech Solutions Inc.',
      issueDate: '2026-01-30',
      amount: '$2,100.00',
      reason: 'Product returned – quality issue',
      status: 'Sent',
    },
  ];

  const filteredDebitNotes = debitNotes.filter(note => {
    const matchesSearch = note.vendor.toLowerCase().includes(debitNoteSearch.toLowerCase()) ||
                         note.id.toLowerCase().includes(debitNoteSearch.toLowerCase()) ||
                         note.reason.toLowerCase().includes(debitNoteSearch.toLowerCase());
    const matchesStatus = debitNoteStatusFilter === 'all' || note.status === debitNoteStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vendor.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || vendor.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || vendor.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const filteredBills = bills.filter(bill => {
    const matchesSearch = bill.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bill.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || bill.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || bill.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;
    const matchesMethod = methodFilter === 'all' || payment.paymentMethod === methodFilter;
    
    return matchesSearch && matchesStatus && matchesMethod;
  });

  const totalPages = Math.ceil(filteredVendors.length / 50);

  return (
    <div className={`purchases-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <FinancialSidebar onLogout={handleLogoutClick} isDarkMode={isDarkMode} activePage="purchases" />
      <div className="purchases-main">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="purchases-content">
          <div className="purchases-container">
            {/* Page Header */}
            <div className="purchases-page-header">
              <div className="header-text">
                <h1>Purchases (Accounts Payable)</h1>
                <p>
                  {activeTab === 'vendors' && 'Manage vendors, bills, payments, approvals and debit notes.'}
                  {activeTab === 'bills' && 'Manage vendors, bills, payments, approvals and debit notes.'}
                  {activeTab === 'payments' && 'Record and track all outgoing payments to vendors.'}
                  {activeTab === 'approvals' && 'Record and track all outgoing payments to vendors.'}
                  {activeTab === 'debt-notes' && 'Manage purchase returns and price adjustments.'}
                </p>
              </div>
              {(activeTab === 'vendors' || activeTab === 'bills' || activeTab === 'payments' || activeTab === 'approvals' || activeTab === 'debt-notes') && (
                <button className="add-vendor-btn" onClick={() => setShowAddVendor(true)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.33334V12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {activeTab === 'vendors' ? 'Add Vendor'
                    : activeTab === 'debt-notes' ? 'Create Debit Note'
                    : 'Add New'}
                </button>
              )}
            </div>

            {/* Tabs */}
            <div className="purchases-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`purchases-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Metrics Cards */}
            {activeTab === 'vendors' && (
              <>
                <div className="purchases-metrics-grid">
                  {/* Card 1 - Total Vendors */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper blue">
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88563 10.781C9.38553 10.281 8.70725 10 8.00001 10H4.00001C3.29277 10 2.61449 10.281 2.11439 10.781C1.6143 11.2811 1.33334 11.9594 1.33334 12.6667V14" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.00001 7.33333C7.47277 7.33333 8.66668 6.13943 8.66668 4.66667C8.66668 3.19391 7.47277 2 6.00001 2C4.52725 2 3.33334 3.19391 3.33334 4.66667C3.33334 6.13943 4.52725 7.33333 6.00001 7.33333Z" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6667 14V12.6667C14.6662 12.0758 14.4696 11.5019 14.1076 11.0349C13.7456 10.5679 13.2387 10.2344 12.6667 10.0867" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1117 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1117 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Total Vendors</h3>
                      <div className="metric-value">47</div>
                      <p className="metric-subtitle">4 active this month</p>
                    </div>
                  </div>

                  {/* Card 2 - Total Payables */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper orange">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33334V14.6667" stroke="#F54900" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3333 3.33334H6.33333C5.71449 3.33334 5.121 3.57918 4.68342 4.01676C4.24583 4.45435 4 5.04784 4 5.66668C4 6.28552 4.24583 6.87901 4.68342 7.31659C5.121 7.75418 5.71449 8.00001 6.33333 8.00001H9.66667C10.2855 8.00001 10.879 8.24584 11.3166 8.68343C11.7542 9.12101 12 9.71451 12 10.3333C12 10.9522 11.7542 11.5457 11.3166 11.9833C10.879 12.4208 10.2855 12.6667 9.66667 12.6667H4" stroke="#F54900" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Total Payables</h3>
                      <div className="metric-value">$56,000</div>
                      <p className="metric-subtitle">Across 5 vendors</p>
                    </div>
                  </div>

                  {/* Card 3 - Active Vendors */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper green">
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5339 6.66666C14.8384 8.16086 14.6214 9.71428 13.9192 11.0679C13.2169 12.4214 12.0719 13.4934 10.675 14.1049C9.27803 14.7164 7.7137 14.8305 6.24281 14.4282C4.77193 14.026 3.48341 13.1316 2.59213 11.8943C1.70085 10.657 1.26069 9.15148 1.34505 7.62892C1.42941 6.10635 2.0332 4.65872 3.05571 3.52744C4.07823 2.39616 5.45767 1.64961 6.96399 1.4123C8.47031 1.17498 10.0125 1.46123 11.3333 2.22333" stroke="#009966" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33332L8 9.33332L14.6667 2.66666" stroke="#009966" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Active Vendors</h3>
                      <div className="metric-value">42</div>
                      <p className="metric-subtitle">80% of total</p>
                    </div>
                  </div>

                  {/* Card 4 - Avg Payment Terms */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper pink">
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33337 1.33334V4.00001" stroke="#9810FA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6666 1.33334V4.00001" stroke="#9810FA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26361 2 3.99999V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V3.99999C14 3.26361 13.403 2.66666 12.6667 2.66666Z" stroke="#9810FA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 6.66666H14" stroke="#9810FA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Avg Payment Terms</h3>
                      <div className="metric-value">32 days</div>
                      <p className="metric-subtitle">Weighted average</p>
                    </div>
                  </div>
                </div>

                {/* Vendors Section */}
                <div className="vendors-section">
                  <div className="vendors-header">
                    <div className="vendors-title">
                      <h2>Vendors</h2>
                      <button className="info-icon-btn" title="Information about payments">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.91351" cy="7.91351" r="7.91351" fill="#AFAFAF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.20451 5.18474C9.32816 4.96836 9.39771 4.7172 9.39771 4.45058C9.39771 3.63141 8.7331 2.9668 7.91393 2.9668C7.09475 2.9668 6.43014 3.63141 6.43014 4.45058C6.43014 5.26975 7.09475 5.93436 7.91393 5.93436C8.46648 5.93436 8.94948 5.63297 9.20451 5.18474ZM6.92474 6.92355H7.41933H8.40852C8.95528 6.92355 9.39771 7.36598 9.39771 7.91274V8.90193V12.8587C9.39771 13.4054 8.95528 13.8479 8.40852 13.8479C7.86176 13.8479 7.41933 13.4054 7.41933 12.8587V9.64382C7.41933 9.23424 7.08702 8.90193 6.67744 8.90193C6.26785 8.90193 5.93555 8.56963 5.93555 8.16004V7.91274C5.93555 7.56498 6.11522 7.25779 6.38571 7.08198C6.54027 6.98151 6.72574 6.92355 6.92474 6.92355Z" fill="white"/>
              </svg>
            </button>
                    </div>
                    <p className="vendors-subtitle">Manage your supplier relationships and directory.</p>
                  </div>

                  <div className="vendors-controls">
                    <div className="search-box-full">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.75 15.75L12.4875 12.4875" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <input
                        type="text"
                        placeholder="Search Vendors"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div className="filter-dropdowns">
                      <select 
                        className="filter-dropdown"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                      >
                        <option value="all">All Status</option>
                        <option value="Active">Active</option>
                        <option value="In Active">In Active</option>
                      </select>

                      <select 
                        className="filter-dropdown"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                      >
                        <option value="all">All Categories</option>
                        <option value="IT & Software">IT & Software</option>
                        <option value="Office Supplies">Office Supplies</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </div>
                  </div>

                  {/* Vendors Table */}
                  <div className="vendors-table-container">
                    <table className="vendors-table">
                      <thead>
                        <tr>
                          <th>VENDOR NAME</th>
                          <th>CONTACT</th>
                          <th>CATEGORY</th>
                          <th>TOTAL BILLED</th>
                          <th>STATUS</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredVendors.map((vendor) => (
                          <tr key={vendor.id}>
                            <td>
                              <div className="vendor-name-cell">
                                <div className="vendor-name">{vendor.name}</div>
                                <div className="vendor-id">{vendor.id}</div>
                              </div>
                            </td>
                            <td>
                              <div className="contact-cell">
                                <div className="contact-email">
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.33325 2.33334H11.6666C12.3999 2.33334 12.9999 2.93334 12.9999 3.66668V10.3333C12.9999 11.0667 12.3999 11.6667 11.6666 11.6667H2.33325C1.59992 11.6667 0.999919 11.0667 0.999919 10.3333V3.66668C0.999919 2.93334 1.59992 2.33334 2.33325 2.33334Z" stroke="#4A5565" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.9999 3.66666L6.99992 7.66666L0.999919 3.66666" stroke="#4A5565" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  {vendor.email}
                                </div>
                                <div className="contact-phone">
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9168 9.85V11.6833C12.9175 11.8492 12.8839 12.0135 12.8183 12.1657C12.7527 12.3179 12.6565 12.4548 12.5357 12.5681C12.4149 12.6814 12.2722 12.7686 12.1165 12.8242C11.9609 12.8798 11.7957 12.9026 11.6308 12.8913C9.74787 12.6995 7.93863 12.0494 6.35016 10.9967C4.87047 9.99924 3.63205 8.66082 2.73433 7.08167C1.67349 5.48216 1.02253 3.60051 0.833828 1.63667C0.822529 1.47251 0.845097 1.30798 0.90019 1.15294C0.955284 0.997899 1.04177 0.855787 1.15422 0.735341C1.26666 0.614896 1.40262 0.518595 1.55387 0.452782C1.70512 0.386969 1.86836 0.353114 2.03349 0.353336H3.86683C4.15527 0.350642 4.43477 0.457301 4.65303 0.653301C4.87129 0.849302 5.01277 1.12189 5.05016 1.4175C5.11961 1.99416 5.25679 2.56187 5.45933 3.10917C5.5409 3.3185 5.56042 3.54718 5.51548 3.76763C5.47055 3.98808 5.36308 4.19102 5.20516 4.35167L4.43516 5.12167C5.32156 6.64689 6.62161 7.94694 8.14683 8.83334L8.91683 8.06334C9.07748 7.90542 9.28042 7.79794 9.50087 7.75301C9.72132 7.70808 9.95 7.72759 10.1593 7.80917C10.7066 8.01171 11.2743 8.14889 11.851 8.21834C12.1503 8.25606 12.4261 8.40052 12.6225 8.6233C12.8189 8.84608 12.9234 9.13071 12.9168 9.42334V9.85Z" stroke="#4A5565" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  {vendor.phone}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="category-badge">{vendor.category}</div>
                            </td>
                            <td>
                              <div className="total-billed">{vendor.totalBilled}</div>
                            </td>
                            <td>
                              <span className={`status-badge ${vendor.status.toLowerCase().replace(' ', '-')}`}>
                                {vendor.status}
                              </span>
                            </td>
                            <td>
                              <button className="actions-btn">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M8 3.99999C8.36819 3.99999 8.66667 3.70152 8.66667 3.33333C8.66667 2.96514 8.36819 2.66666 8 2.66666C7.63181 2.66666 7.33333 2.96514 7.33333 3.33333C7.33333 3.70152 7.63181 3.99999 8 3.99999Z" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333Z" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="pagination">
                    <div className="pagination-info">
                      <span>Showing</span>
                      <select className="page-size-select">
                        <option>50</option>
                        <option>100</option>
                        <option>200</option>
                      </select>
                      <span>/ 15 Results</span>
                    </div>
                    <div className="pagination-controls">
                      <button 
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      {[1, 2, 3, 4, 5].map(page => (
                        <button
                          key={page}
                          className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      ))}
                      <span className="pagination-dots">...</span>
                      <button className="pagination-number">10</button>
                      <button 
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                </div>
                
              </>
            )}

            {/* Bills Tab */}
            {activeTab === 'bills' && (
              <>
                <div className="purchases-metrics-grid">
                  {/* Card 1 - Total Bills */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper blue">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99996 1.33334H3.99996C3.64634 1.33334 3.3072 1.47382 3.05715 1.72387C2.8071 1.97392 2.66663 2.31305 2.66663 2.66668V13.3333C2.66663 13.687 2.8071 14.0261 3.05715 14.2762C3.3072 14.5262 3.64634 14.6667 3.99996 14.6667H12C12.3536 14.6667 12.6927 14.5262 12.9428 14.2762C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V4.66668L9.99996 1.33334Z" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33337 1.33334V4.00001C9.33337 4.35363 9.47385 4.69277 9.7239 4.94282C9.97395 5.19287 10.3131 5.33334 10.6667 5.33334H13.3334" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66671 6H5.33337" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 8.66666H5.33337" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 11.3333H5.33337" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Total Bills</h3>
                      <div className="metric-value">124</div>
                      <p className="metric-subtitle">this year</p>
                    </div>
                  </div>

                  {/* Card 2 - Unpaid Bills */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper orange">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="#F54900" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 5.33334V8.00001" stroke="#F54900" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10.6667H8.00667" stroke="#F54900" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Unpaid Bills</h3>
                      <div className="metric-value">$59,400</div>
                      <p className="metric-subtitle">3 bills pending</p>
                    </div>
                  </div>

                  {/* Card 3 - Overdue */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper red">
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="#E7000B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6L6 10" stroke="#E7000B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L10 10" stroke="#E7000B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Overdue</h3>
                      <div className="metric-value">$3,200</div>
                      <p className="metric-subtitle">1 bill overdue</p>
                    </div>
                  </div>

                  {/* Card 4 - Paid This Month */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper green">
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#009966" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33332L8 9.33332L14.6667 2.66666" stroke="#009966" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Paid This Month</h3>
                      <div className="metric-value">$15,450</div>
                      <p className="metric-subtitle">12 bills paid</p>
                    </div>
                  </div>
                </div>

                {/* Bills Section */}
                <div className="vendors-section">
                  <div className="vendors-header">
                    <div className="vendors-title">
                      <h2>Bills</h2>
                       <button className="info-icon-btn" title="Information about payments">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.91351" cy="7.91351" r="7.91351" fill="#AFAFAF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.20451 5.18474C9.32816 4.96836 9.39771 4.7172 9.39771 4.45058C9.39771 3.63141 8.7331 2.9668 7.91393 2.9668C7.09475 2.9668 6.43014 3.63141 6.43014 4.45058C6.43014 5.26975 7.09475 5.93436 7.91393 5.93436C8.46648 5.93436 8.94948 5.63297 9.20451 5.18474ZM6.92474 6.92355H7.41933H8.40852C8.95528 6.92355 9.39771 7.36598 9.39771 7.91274V8.90193V12.8587C9.39771 13.4054 8.95528 13.8479 8.40852 13.8479C7.86176 13.8479 7.41933 13.4054 7.41933 12.8587V9.64382C7.41933 9.23424 7.08702 8.90193 6.67744 8.90193C6.26785 8.90193 5.93555 8.56963 5.93555 8.16004V7.91274C5.93555 7.56498 6.11522 7.25779 6.38571 7.08198C6.54027 6.98151 6.72574 6.92355 6.92474 6.92355Z" fill="white"/>
              </svg>
            </button>
                    </div>
                    <p className="vendors-subtitle">Manage your supplier relationships and directory.</p>
                  </div>

                  <div className="vendors-controls">
                    <div className="search-box-full">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.75 15.75L12.4875 12.4875" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <input
                        type="text"
                        placeholder="Search Bills"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div className="filter-dropdowns">
                      <select 
                        className="filter-dropdown"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                      >
                        <option value="all">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Unpaid">Unpaid</option>
                        <option value="Paid">Paid</option>
                        <option value="Overdue">Overdue</option>
                      </select>

                      <select 
                        className="filter-dropdown"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                      >
                        <option value="all">All Categories</option>
                        <option value="IT & Software">IT & Software</option>
                        <option value="Office Supplies">Office Supplies</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </div>
                  </div>

                  {/* Bills Table */}
                  <div className="vendors-table-container">
                    <table className="vendors-table bills-table">
                      <thead>
                        <tr>
                          <th>VENDOR NAME</th>
                          <th>VENDOR</th>
                          <th>ISSUE DATE</th>
                          <th>DUE DATE</th>
                          <th>TOTAL BILLED</th>
                          <th>STATUS</th>
                          <th>CATEGORY</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredBills.map((bill) => (
                          <tr key={bill.id}>
                            <td>
                              <div className="vendor-id">{bill.id}</div>
                            </td>
                            <td>
                              <div className="vendor-name">{bill.vendorName}</div>
                            </td>
                            <td>
                              <div className="date-text">{bill.issueDate}</div>
                            </td>
                            <td>
                              <div className={`date-text ${bill.isOverdue ? 'overdue-date' : ''}`}>
                                {bill.dueDate}
                              </div>
                            </td>
                            <td>
                              <div className="total-billed-cell">
                                <div className="total-amount">{bill.totalBilled}</div>
                                {bill.partialAmount && (
                                  <div className="partial-amount">Part {bill.partialAmount}</div>
                                )}
                              </div>
                            </td>
                            <td>
                              <span className={`status-badge bill-status-${bill.status.toLowerCase()}`}>
                                {bill.status}
                              </span>
                            </td>
                            <td>
                              <div className="category-badge">{bill.category}</div>
                            </td>
                            <td>
                              <button className="pay-now-btn">
                                Pay Now
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="pagination">
                    <div className="pagination-info">
                      <span>Showing</span>
                      <select className="page-size-select">
                        <option>50</option>
                        <option>100</option>
                        <option>200</option>
                      </select>
                      <span>/ 15 Results</span>
                    </div>
                    <div className="pagination-controls">
                      <button 
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      {[1, 2, 3, 4, 5].map(page => (
                        <button
                          key={page}
                          className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      ))}
                      <span className="pagination-dots">...</span>
                      <button className="pagination-number">10</button>
                      <button 
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.min(10, prev + 1))}
                        disabled={currentPage === 10}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
            {/* Payments Tab */}
            {activeTab === 'payments' && (
              <>
                <div className="purchases-metrics-grid">
                  {/* Card 1 - Total Payments */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper blue">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.33334V14.6667" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3333 3.33334H6.33333C5.71449 3.33334 5.121 3.57918 4.68342 4.01676C4.24583 4.45435 4 5.04784 4 5.66668C4 6.28552 4.24583 6.87901 4.68342 7.31659C5.121 7.75418 5.71449 8.00001 6.33333 8.00001H9.66667C10.2855 8.00001 10.879 8.24584 11.3166 8.68343C11.7542 9.12101 12 9.71451 12 10.3333C12 10.9522 11.7542 11.5457 11.3166 11.9833C10.879 12.4208 10.2855 12.6667 9.66667 12.6667H4" stroke="#155DFC" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Total Payments</h3>
                      <div className="metric-value">87</div>
                      <p className="metric-subtitle">This year</p>
                    </div>
                  </div>

                  {/* Card 2 - Amount Paid */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper green">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_505_261)">
<path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#009966" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 7.33332L8 9.33332L14.6667 2.66666" stroke="#009966" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_505_261">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Amount Paid</h3>
                      <div className="metric-value">$214,950</div>
                      <p className="metric-subtitle"><span style={{color: '#00A63E'}}>+15%</span> from last month</p>
                    </div>
                  </div>

                  {/* Card 3 - Pending Payments */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper orange">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_505_273)">
<path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="#E17100" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 4V8L10.6667 9.33333" stroke="#E17100" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_505_273">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Pending Payments</h3>
                      <div className="metric-value">$6,500</div>
                      <p className="metric-subtitle">1 payment pending</p>
                    </div>
                  </div>

                  {/* Card 4 - Avg Payment Value */}
                  <div className="purchases-metric-card">
                    <div className="metric-icon-wrapper pink">
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6668 4.66666L9.00016 10.3333L5.66683 6.99999L1.3335 11.3333" stroke="#9810FA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6665 4.66666H14.6665V8.66666" stroke="#9810FA" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Avg Payment Value</h3>
                      <div className="metric-value">$2,471</div>
                      <p className="metric-subtitle">Per payment</p>
                    </div>
                  </div>
                </div>

                {/* Payments Section */}
                <div className="vendors-section">
                  <div className="vendors-header">
                    <div className="vendors-title">
                      <h2>Payments</h2>
                      <button className="info-icon-btn" title="Information about payments">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.91351" cy="7.91351" r="7.91351" fill="#AFAFAF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.20451 5.18474C9.32816 4.96836 9.39771 4.7172 9.39771 4.45058C9.39771 3.63141 8.7331 2.9668 7.91393 2.9668C7.09475 2.9668 6.43014 3.63141 6.43014 4.45058C6.43014 5.26975 7.09475 5.93436 7.91393 5.93436C8.46648 5.93436 8.94948 5.63297 9.20451 5.18474ZM6.92474 6.92355H7.41933H8.40852C8.95528 6.92355 9.39771 7.36598 9.39771 7.91274V8.90193V12.8587C9.39771 13.4054 8.95528 13.8479 8.40852 13.8479C7.86176 13.8479 7.41933 13.4054 7.41933 12.8587V9.64382C7.41933 9.23424 7.08702 8.90193 6.67744 8.90193C6.26785 8.90193 5.93555 8.56963 5.93555 8.16004V7.91274C5.93555 7.56498 6.11522 7.25779 6.38571 7.08198C6.54027 6.98151 6.72574 6.92355 6.92474 6.92355Z" fill="white"/>
              </svg>
            </button>
                    </div>
                    <p className="vendors-subtitle">Record and track all outgoing payments to vendors.</p>
                  </div>

                  <div className="vendors-controls">
                    <div className="search-box-full">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.75 15.75L12.4875 12.4875" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <input
                        type="text"
                        placeholder="Search Payments"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div className="filter-dropdowns">
                      <select 
                        className="filter-dropdown"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                      >
                        <option value="all">All Status</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                      </select>

                      <select 
                        className="filter-dropdown"
                        value={methodFilter}
                        onChange={(e) => setMethodFilter(e.target.value)}
                      >
                        <option value="all">All Methods</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Wire Transfer">Wire Transfer</option>
                        <option value="Check">Check</option>
                      </select>
                    </div>
                  </div>

                  {/* Payments Table */}
                  <div className="vendors-table-container">
                    <table className="vendors-table payments-table">
                      <thead>
                        <tr>
                          <th>PAYMENT ID</th>
                          <th>VENDOR</th>
                          <th>PAYMENT DATE</th>
                          <th>TOTAL BILLED</th>
                          <th>PAYMENT METHOD</th>
                          <th>STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPayments.map((payment) => (
                          <tr key={payment.id}>
                            <td>
                              <div className="payment-id-cell">
                                <div className="payment-main-id">{payment.id}</div>
                                <div className="payment-sub-id">{payment.payId}</div>
                              </div>
                            </td>
                            <td>
                              <div className="vendor-name">{payment.vendorName}</div>
                            </td>
                            <td>
                              <div className="date-text">{payment.paymentDate}</div>
                            </td>
                            <td>
                              <div className="total-billed">{payment.totalBilled}</div>
                            </td>
                            <td>
                              <div className="payment-method-cell">
                                <div className="method-name">{payment.paymentMethod}</div>
                                <div className="method-reference">{payment.reference}</div>
                              </div>
                            </td>
                            <td>
                              <span className={`status-badge payment-status-${payment.status.toLowerCase()}`}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  {payment.status === 'Completed' ? (
                                    <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  ) : (
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_505_486)">
<path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#BB4D00" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 3V6L8 7" stroke="#ce6e28" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_505_486">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>

                                  )}
                                </svg>
                                {payment.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="pagination">
                    <div className="pagination-info">
                      <span>Showing</span>
                      <select className="page-size-select">
                        <option>50</option>
                        <option>100</option>
                        <option>200</option>
                      </select>
                      <span>/ 15 Results</span>
                    </div>
                    <div className="pagination-controls">
                      <button 
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      {[1, 2, 3, 4, 5].map(page => (
                        <button
                          key={page}
                          className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      ))}
                      <span className="pagination-dots">...</span>
                      <button className="pagination-number">10</button>
                      <button 
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.min(10, prev + 1))}
                        disabled={currentPage === 10}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === 'approvals' && (
              <div className="vendors-section">
                <div className="vendors-header">
                  <div className="vendors-title">
                    <h2>Approvals</h2>
                    <button className="info-icon-btn" title="Information about approvals">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.91351" cy="7.91351" r="7.91351" fill="#AFAFAF"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.20451 5.18474C9.32816 4.96836 9.39771 4.7172 9.39771 4.45058C9.39771 3.63141 8.7331 2.9668 7.91393 2.9668C7.09475 2.9668 6.43014 3.63141 6.43014 4.45058C6.43014 5.26975 7.09475 5.93436 7.91393 5.93436C8.46648 5.93436 8.94948 5.63297 9.20451 5.18474ZM6.92474 6.92355H7.41933H8.40852C8.95528 6.92355 9.39771 7.36598 9.39771 7.91274V8.90193V12.8587C9.39771 13.4054 8.95528 13.8479 8.40852 13.8479C7.86176 13.8479 7.41933 13.4054 7.41933 12.8587V9.64382C7.41933 9.23424 7.08702 8.90193 6.67744 8.90193C6.26785 8.90193 5.93555 8.56963 5.93555 8.16004V7.91274C5.93555 7.56498 6.11522 7.25779 6.38571 7.08198C6.54027 6.98151 6.72574 6.92355 6.92474 6.92355Z" fill="white"/>
                      </svg>
                    </button>
                  </div>
                  <p className="vendors-subtitle">Review and authorize pending purchase transactions.</p>
                </div>

                <div className="approvals-list">
                  {approvals.map((approval) => {
                    const status = approvalStatuses[approval.id] || 'pending';
                    return (
                      <div
                        key={approval.id}
                        className={`approval-item approval-item--${status}`}
                      >
                        <div className="approval-icon-wrapper">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#E17100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 4.5V9L12 10.5" stroke="#E17100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="approval-body">
                          <div className="approval-top-row">
                            <span className="approval-type">{approval.type}</span>
                            <span className={`approval-badge approval-badge--${status}`}>
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </span>
                          </div>
                          <p className="approval-meta">
                            Requested by <strong>{approval.requestedBy}</strong> on {approval.date}
                          </p>
                          <p className="approval-amount">{approval.amount}</p>
                        </div>
                        <div className="approval-actions">
                          {status === 'pending' ? (
                            <>
                              <button
                                className="reject-btn"
                                onClick={() => handleReject(approval.id)}
                              >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 3.5L3.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Reject
                              </button>
                              <button
                                className="approve-btn"
                                onClick={() => handleApprove(approval.id)}
                              >
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Approve
                              </button>
                            </>
                          ) : (
                            <span className={`approval-result-label approval-result-label--${status}`}>
                              {status === 'approved' ? (
                                <>
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  Approved
                                </>
                              ) : (
                                <>
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 3.5L3.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  Rejected
                                </>
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {activeTab === 'debt-notes' && (
              <>
                <div className="purchases-metrics-grid">
                  <div className="purchases-metric-card" onClick={() => {}}>
                    <div className="metric-icon-wrapper blue">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99996 1.33334H3.99996C3.64634 1.33334 3.3072 1.47382 3.05715 1.72387C2.8071 1.97392 2.66663 2.31305 2.66663 2.66668V13.3333C2.66663 13.687 2.8071 14.0261 3.05715 14.2762C3.3072 14.5262 3.64634 14.6667 3.99996 14.6667H12C12.3536 14.6667 12.6927 14.5262 12.9428 14.2762C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V4.66668L9.99996 1.33334Z" stroke="#155DFC" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.33337 1.33334V4.00001C9.33337 4.35363 9.47385 4.69277 9.7239 4.94282C9.97395 5.19287 10.3131 5.33334 10.6667 5.33334H13.3334" stroke="#155DFC" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.6667 11.3333H5.33337" stroke="#155DFC" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.6667 8.66666H5.33337" stroke="#155DFC" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.66671 6H5.33337" stroke="#155DFC" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Total Debit Notes</h3>
                      <div className="metric-value">18</div>
                      <p className="metric-subtitle">This year</p>
                    </div>
                  </div>

                  <div className="purchases-metric-card" onClick={() => {}}>
                    <div className="metric-icon-wrapper orange">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1.33334V14.6667" stroke="#F54900" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.3333 3.33334H6.33333C5.71449 3.33334 5.121 3.57918 4.68342 4.01676C4.24583 4.45435 4 5.04784 4 5.66668C4 6.28552 4.24583 6.87901 4.68342 7.31659C5.121 7.75418 5.71449 8.00001 6.33333 8.00001H9.66667C10.2855 8.00001 10.879 8.24584 11.3166 8.68343C11.7542 9.12101 12 9.71451 12 10.3333C12 10.9522 11.7542 11.5457 11.3166 11.9833C10.879 12.4208 10.2855 12.6667 9.66667 12.6667H4" stroke="#F54900" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Total Value</h3>
                      <div className="metric-value">$8,240</div>
                      <p className="metric-subtitle">Total adjustments</p>
                    </div>
                  </div>

                  <div className="purchases-metric-card" onClick={() => {}}>
                    <div className="metric-icon-wrapper green">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5341 6.66666C14.8385 8.16086 14.6215 9.71428 13.9193 11.0679C13.2171 12.4214 12.072 13.4934 10.6751 14.1049C9.27816 14.7164 7.71382 14.8305 6.24293 14.4282C4.77205 14.026 3.48353 13.1316 2.59225 11.8943C1.70097 10.657 1.26081 9.15148 1.34518 7.62892C1.42954 6.10635 2.03332 4.65872 3.05583 3.52744C4.07835 2.39616 5.45779 1.64961 6.96411 1.4123C8.47043 1.17498 10.0126 1.46123 11.3334 2.22333" stroke="#009966" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 7.33332L8 9.33332L14.6667 2.66666" stroke="#009966" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Accepted</h3>
                      <div className="metric-value">12</div>
                      <p className="metric-subtitle" style={{ color: '#009966' }}>$5,680 recovered</p>
                    </div>
                  </div>

                  <div className="purchases-metric-card" onClick={() => {}}>
                    <div className="metric-icon-wrapper orange">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="#E17100" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 4V8L10.6667 9.33333" stroke="#E17100" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="metric-content">
                      <h3 className="metric-label">Pending</h3>
                      <div className="metric-value">4</div>
                      <p className="metric-subtitle">Awaiting response</p>
                    </div>
                  </div>
                </div>

                <div className="vendors-section">
                  <div className="vendors-header">
                    <div className="vendors-title">
                      <h2>Debit Notes</h2>
                      <button className="info-icon-btn" title="Information about debit notes">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="7.91351" cy="7.91351" r="7.91351" fill="#AFAFAF"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M9.20451 5.18474C9.32816 4.96836 9.39771 4.7172 9.39771 4.45058C9.39771 3.63141 8.7331 2.9668 7.91393 2.9668C7.09475 2.9668 6.43014 3.63141 6.43014 4.45058C6.43014 5.26975 7.09475 5.93436 7.91393 5.93436C8.46648 5.93436 8.94948 5.63297 9.20451 5.18474ZM6.92474 6.92355H7.41933H8.40852C8.95528 6.92355 9.39771 7.36598 9.39771 7.91274V8.90193V12.8587C9.39771 13.4054 8.95528 13.8479 8.40852 13.8479C7.86176 13.8479 7.41933 13.4054 7.41933 12.8587V9.64382C7.41933 9.23424 7.08702 8.90193 6.67744 8.90193C6.26785 8.90193 5.93555 8.56963 5.93555 8.16004V7.91274C5.93555 7.56498 6.11522 7.25779 6.38571 7.08198C6.54027 6.98151 6.72574 6.92355 6.92474 6.92355Z" fill="white"/>
                        </svg>
                      </button>
                    </div>
                    <p className="vendors-subtitle">Manage purchase returns and price adjustments.</p>
                  </div>

                  <div className="vendors-controls">
                    <div className="search-box-full">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.75 15.75L12.4875 12.4875" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <input
                        type="text"
                        placeholder="Search Debit Notes"
                        value={debitNoteSearch}
                        onChange={(e) => setDebitNoteSearch(e.target.value)}
                      />
                    </div>
                    <div className="filter-dropdowns">
                      <select
                        className="filter-dropdown"
                        value={debitNoteStatusFilter}
                        onChange={(e) => setDebitNoteStatusFilter(e.target.value)}
                      >
                        <option value="all">All Status</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Sent">Sent</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                  </div>

                  <div className="vendors-table-container">
                    <table className="vendors-table debit-notes-table">
                      <thead>
                        <tr>
                          <th>NOTE ID</th>
                          <th>VENDOR</th>
                          <th>ISSUE DATE</th>
                          <th>AMOUNT</th>
                          <th>REASON</th>
                          <th>STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredDebitNotes.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="empty-state">No debit notes found.</td>
                          </tr>
                        ) : (
                          filteredDebitNotes.map((note) => (
                            <tr key={note.id}>
                              <td>
                                <div className="vendor-id">{note.id}</div>
                              </td>
                              <td>
                                <div className="vendor-name">{note.vendor}</div>
                              </td>
                              <td>
                                <div className="date-text">{note.issueDate}</div>
                              </td>
                              <td>
                                <div className="total-billed">{note.amount}</div>
                              </td>
                              <td>
                                <div className="debit-note-reason">{note.reason}</div>
                              </td>
                              <td>
                                <span className={`status-badge debit-status-${note.status.toLowerCase()}`}>
                                  {note.status}
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="pagination">
                    <div className="pagination-info">
                      <span>Showing</span>
                      <select className="page-size-select">
                        <option>06</option>
                        <option>12</option>
                        <option>24</option>
                      </select>
                      <span>/ 15 Results</span>
                    </div>
                    <div className="pagination-controls">
                      <button
                        className="pagination-btn"
                        onClick={() => setDebitNotePage(prev => Math.max(1, prev - 1))}
                        disabled={debitNotePage === 1}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      {[1, 2, 3].map(page => (
                        <button
                          key={page}
                          className={`pagination-number ${debitNotePage === page ? 'active' : ''}`}
                          onClick={() => setDebitNotePage(page)}
                        >
                          {page}
                        </button>
                      ))}
                      <span className="pagination-dots">...</span>
                      <button className="pagination-number">10</button>
                      <button
                        className="pagination-btn"
                        onClick={() => setDebitNotePage(prev => Math.min(10, prev + 1))}
                        disabled={debitNotePage === 10}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>

      {showLogoutModal && (
        <LogoutConfirmModal
          onClose={handleCloseLogoutModal}
          onConfirm={handleConfirmLogout}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
}
