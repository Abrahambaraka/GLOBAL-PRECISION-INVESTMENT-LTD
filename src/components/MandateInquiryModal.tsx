import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Download,
  ArrowRight,
  Building,
  FileText,
} from 'lucide-react';
import { DivisionId } from '../types';

interface MandateInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNotes?: string;
}

export const MandateInquiryModal: React.FC<MandateInquiryModalProps> = ({
  isOpen,
  onClose,
  initialNotes = '',
}) => {
  const [institutionName, setInstitutionName] = useState('');
  const [fundType, setFundType] = useState('Sovereign Wealth Fund');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [mandateAmount, setMandateAmount] = useState('250');
  const [divisionInterest, setDivisionInterest] = useState<DivisionId | 'all'>('all');
  const [jurisdiction, setJurisdiction] = useState('Switzerland (FINMA Compliant)');
  const [notes, setNotes] = useState(initialNotes);
  const [accreditedChecked, setAccreditedChecked] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!institutionName.trim() || !contactName.trim() || !email.trim()) {
      setErrorMessage('Please provide your Institution Name, Officer Name, and Corporate Email.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid institutional email address.');
      return;
    }

    if (!accreditedChecked) {
      setErrorMessage('Please acknowledge the Accredited Institutional Investor compliance status.');
      return;
    }

    setErrorMessage('');
    const refCode = `MND-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(refCode);
    setSubmitted(true);
  };

  const handleDownloadConfirmation = () => {
    const text = `GLOBAL PRECISION INVESTMENT - FORMAL MANDATE INQUIRY
Reference Code: ${referenceId}
Fiduciary Timestamp: ${new Date().toISOString()}

INSTITUTIONAL APPLICANT:
- Institution Name: ${institutionName}
- Entity Classification: ${fundType}
- Mandate Officer: ${contactName}
- Official Contact: ${email}
- Regulatory Jurisdiction: ${jurisdiction}

MANDATE PARAMETERS:
- Indicated Deployment: $${mandateAmount} Million USD
- Sector Focus: ${divisionInterest.toUpperCase()}
- Fiduciary Note: ${notes || 'Standard Institutional Hurdle Rate'}
- Fiduciary Status: Certified Accredited Sovereign / Qualified Institutional Buyer

GOVERNING ADVISORY:
Global Precision Investment Executive Committee
Zurich · Singapore · London · New York`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GPI-Mandate-${referenceId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#00173b]/65 backdrop-blur-xs overflow-y-auto">
      <div
        className="bg-white rounded-lg border border-[#cbd5e1] max-w-2xl w-full max-h-[92vh] overflow-y-auto relative my-8"
        style={{
          boxShadow:
            '0 12px 32px -4px rgba(15, 44, 89, 0.14), 0 4px 12px -2px rgba(15, 44, 89, 0.06)',
        }}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-[0.25rem] bg-[#f9a825]"></span>
            <span className="text-xs uppercase tracking-wider text-[#0f2c59] font-bold">
              Institutional Capital Mandate Inquiry
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-[0.25rem] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0f2c59] bg-slate-100 px-3 py-1 rounded-[0.25rem]">
                Reference: {referenceId}
              </span>
              <h3 className="text-2xl font-bold font-display text-[#0f2c59] mt-3">
                Mandate Inquiry Transmitted
              </h3>
              <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto">
                Your mandate parameters for{' '}
                <span className="font-semibold text-slate-900">${mandateAmount}M USD</span> have been
                logged under confidential fiduciary protocols. The Managing Director of Capital
                Allocation will connect via secure teleconference within 1 business cycle.
              </p>
            </div>

            <div className="bg-[#f8fafc] border border-slate-200 rounded-md p-4 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Institution:</span>
                <span className="font-medium text-slate-900">{institutionName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Fiduciary Officer:</span>
                <span className="font-medium text-slate-900">{contactName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Corporate Email:</span>
                <span className="font-medium text-slate-900">{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Classification:</span>
                <span className="font-medium text-slate-900">{fundType}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={handleDownloadConfirmation}
                className="btn-outline-navy px-5 py-2.5 text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Mandate Slip (TXT)</span>
              </button>
              <button
                onClick={onClose}
                className="btn-gold px-6 py-2.5 text-xs uppercase tracking-wider font-bold cursor-pointer w-full sm:w-auto"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 lg:p-8 space-y-5">
            <div>
              <h3 className="text-xl font-bold font-display text-[#0f2c59]">
                Fiduciary Allocation Review
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                For sovereign wealth authorities, pension systems, single family offices, and
                accredited institutional trusts deploying ≥$25M USD.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-[0.25rem]">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Institution Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1">
                  Institution Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sovereign Reserve Fund / Geneva Capital"
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  className="w-full h-[42px] px-3 text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                />
              </div>

              {/* Fund Classification */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1">
                  Entity Classification *
                </label>
                <select
                  value={fundType}
                  onChange={(e) => setFundType(e.target.value)}
                  className="w-full h-[42px] px-3 text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 font-medium focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 cursor-pointer"
                >
                  <option value="Sovereign Wealth Fund">Sovereign Wealth Fund</option>
                  <option value="Pension & Retirement System">Pension & Retirement System</option>
                  <option value="Single Family Office">Single Family Office</option>
                  <option value="Endowment / Foundation">Endowment / Foundation</option>
                  <option value="Private Equity Fund-of-Funds">Private Equity Fund-of-Funds</option>
                  <option value="Commercial Bank Treasury">Commercial Bank Treasury</option>
                </select>
              </div>

              {/* Officer Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1">
                  Managing Officer / CIO *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Alistair Vance, CIO"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full h-[42px] px-3 text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1">
                  Institutional Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="officer@sovereigntrust.ch"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[42px] px-3 text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
                />
              </div>

              {/* Mandate Ticket */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1">
                  Target Mandate Ticket (USD) *
                </label>
                <select
                  value={mandateAmount}
                  onChange={(e) => setMandateAmount(e.target.value)}
                  className="w-full h-[42px] px-3 text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 font-medium focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 cursor-pointer font-mono"
                >
                  <option value="50">$50 Million USD</option>
                  <option value="100">$100 Million USD</option>
                  <option value="250">$250 Million USD</option>
                  <option value="500">$500 Million USD</option>
                  <option value="1000">$1.0+ Billion USD</option>
                </select>
              </div>

              {/* Division Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1">
                  Primary Division Focus *
                </label>
                <select
                  value={divisionInterest}
                  onChange={(e) => setDivisionInterest(e.target.value as DivisionId | 'all')}
                  className="w-full h-[42px] px-3 text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 font-medium focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 cursor-pointer"
                >
                  <option value="all">Balanced Tri-Pillar Mandate (Recommended)</option>
                  <option value="mining">Modern Mining & Battery Metals Only</option>
                  <option value="infrastructure">Industrial Supply & Logistics Only</option>
                  <option value="agriculture">Sustainable Agriculture & Biospheres Only</option>
                </select>
              </div>
            </div>

            {/* Jurisdiction */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1">
                Sovereign Jurisdiction & Custody Preference
              </label>
              <input
                type="text"
                value={jurisdiction}
                onChange={(e) => setJurisdiction(e.target.value)}
                className="w-full h-[42px] px-3 text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
              />
            </div>

            {/* Fiduciary / Allocation Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-1">
                Fiduciary Mandate Parameters / Hurdle Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Specific return hurdles, liquidity redemption horizons, or ESG Article 9 constraints..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/12 transition-all"
              />
            </div>

            {/* Accredited Checkbox conforming to spec:
                18x18px, 0.25rem radius, 1.5px solid #cbd5e1, checked: filled #0f2c59 with checkmark */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group select-none">
                <input
                  type="checkbox"
                  checked={accreditedChecked}
                  onChange={(e) => setAccreditedChecked(e.target.checked)}
                  className="mt-0.5 w-[18px] h-[18px] rounded-[0.25rem] border-[1.5px] border-[#cbd5e1] text-[#0f2c59] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#0f2c59]"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  We confirm our institution qualifies as a Qualified Institutional Buyer (QIB) or
                  Accredited Sovereign Entity under applicable securities laws, and request formal
                  due diligence access to the Global Precision Investment Custody Vault.
                </span>
              </label>
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="btn-ghost px-4 py-2.5 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-gold px-6 py-2.5 text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Transmit Formal Mandate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
