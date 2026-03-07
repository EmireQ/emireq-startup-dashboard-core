import { useState } from "react";
import "./PricingModal.css";

export default function PricingModal() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <button className="closeBtn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <h2 className="title">Subscribe to Emireq Financial Core</h2>
        <p className="subtitle">
          Start your compliant financial stack. Upgrade anytime.
        </p>

        <div className="pricingWrapper">
          {/* Starter */}
          <div className="card">
            <h4>Starter</h4>
            <h2>
              $299 <span>/ month</span>
            </h2>
            <p className="desc">
              Essential financial infrastructure for early-stage startups
            </p>

            <button className="planBtn light">Select Plan</button>

            <ul>
              <li>Basic accounting setup</li>
              <li>Monthly financial reports</li>
              <li>Single bank account integration</li>
              <li>Email support</li>
              <li>Shariah compliance check</li>
              <li>Up to 50 transactions/month</li>
            </ul>
          </div>

          {/* Growth */}
          <div className="card active">
            <span className="badge">Recommended</span>

            <h4>Growth</h4>
            <h2>
              $799 <span>/ month</span>
            </h2>
            <p className="desc">
              Complete financial operations for scaling startups
            </p>

            <button className="planBtn dark">Select Plan</button>

            <ul>
              <li>Everything in Starter</li>
              <li>Advanced accounting & bookkeeping</li>
              <li>Professional audit preparation</li>
              <li>Multi-currency support</li>
              <li>3 bank account integrations</li>
              <li>Real-time financial dashboard</li>
              <li>Priority support (24/7)</li>
              <li>Investor reporting automation</li>
              <li>Up to 500 transactions/month</li>
              <li>Dedicated account manager</li>
            </ul>
          </div>

          {/* Scale */}
          <div className="card">
            <span className="enterprise">Enterprise</span>

            <h4>Scale</h4>
            <h2>Custom</h2>
            <p className="desc">
              Enterprise-grade financial infrastructure with white-glove
              services
            </p>

            <button className="planBtn light">Contact Sales</button>

            <ul>
              <li>Everything in Growth</li>
              <li>Custom accounting workflows</li>
              <li>Full audit & compliance suite</li>
              <li>Unlimited bank integrations</li>
              <li>Custom financial reporting</li>
              <li>API access</li>
              <li>White-label options</li>
              <li>Unlimited transactions</li>
              <li>Dedicated finance team</li>
              <li>Custom SLA agreements</li>
            </ul>
          </div>
        </div>

        <p className="footer">
          All plans include secure data encryption and regular compliance
          updates
        </p>
      </div>
    </div>
  );
}
