import React, { useState, useMemo } from 'react';
import {
  Sliders,
  TrendingUp,
  Shield,
  Leaf,
  DollarSign,
  ArrowRight,
  Download,
  RotateCcw,
  CheckCircle,
} from 'lucide-react';

interface AllocationSimulatorProps {
  onOpenMandateModalWithPlan: (planDetails: string) => void;
}

export const AllocationSimulator: React.FC<AllocationSimulatorProps> = ({
  onOpenMandateModalWithPlan,
}) => {
  // Deployment ticket size in USD millions
  const [ticketSize, setTicketSize] = useState<number>(250);

  // Allocation percentages (must sum to 100)
  const [miningPct, setMiningPct] = useState<number>(35);
  const [infraPct, setInfraPct] = useState<number>(40);
  const [agriPct, setAgriPct] = useState<number>(20);
  const [cashPct, setCashPct] = useState<number>(5);

  const [savedSuccess, setSavedSuccess] = useState(false);

  // Reset to default institutional benchmark
  const handleReset = () => {
    setMiningPct(35);
    setInfraPct(40);
    setAgriPct(20);
    setCashPct(5);
  };

  // Safe percentage updates that rebalance remainder against other assets
  const updateMining = (val: number) => {
    const clamped = Math.max(0, Math.min(80, val));
    setMiningPct(clamped);
    rebalanceRemaining(clamped, infraPct, agriPct, cashPct, 'mining');
  };

  const updateInfra = (val: number) => {
    const clamped = Math.max(0, Math.min(80, val));
    setInfraPct(clamped);
    rebalanceRemaining(miningPct, clamped, agriPct, cashPct, 'infra');
  };

  const updateAgri = (val: number) => {
    const clamped = Math.max(0, Math.min(80, val));
    setAgriPct(clamped);
    rebalanceRemaining(miningPct, infraPct, clamped, cashPct, 'agri');
  };

  const updateCash = (val: number) => {
    const clamped = Math.max(2, Math.min(30, val));
    setCashPct(clamped);
    rebalanceRemaining(miningPct, infraPct, agriPct, clamped, 'cash');
  };

  const rebalanceRemaining = (
    m: number,
    i: number,
    a: number,
    c: number,
    fixedField: 'mining' | 'infra' | 'agri' | 'cash'
  ) => {
    const total = m + i + a + c;
    if (total === 100) return;

    const diff = 100 - total;
    // Distribute diff proportionally among non-fixed fields
    if (fixedField === 'mining') {
      const otherSum = i + a + c;
      if (otherSum > 0) {
        setInfraPct(Math.max(0, Math.round(i + (i / otherSum) * diff)));
        setAgriPct(Math.max(0, Math.round(a + (a / otherSum) * diff)));
        setCashPct(Math.max(2, 100 - m - Math.max(0, Math.round(i + (i / otherSum) * diff)) - Math.max(0, Math.round(a + (a / otherSum) * diff))));
      }
    } else if (fixedField === 'infra') {
      const otherSum = m + a + c;
      if (otherSum > 0) {
        setMiningPct(Math.max(0, Math.round(m + (m / otherSum) * diff)));
        setAgriPct(Math.max(0, Math.round(a + (a / otherSum) * diff)));
        setCashPct(Math.max(2, 100 - i - Math.max(0, Math.round(m + (m / otherSum) * diff)) - Math.max(0, Math.round(a + (a / otherSum) * diff))));
      }
    } else if (fixedField === 'agri') {
      const otherSum = m + i + c;
      if (otherSum > 0) {
        setMiningPct(Math.max(0, Math.round(m + (m / otherSum) * diff)));
        setInfraPct(Math.max(0, Math.round(i + (i / otherSum) * diff)));
        setCashPct(Math.max(2, 100 - a - Math.max(0, Math.round(m + (m / otherSum) * diff)) - Math.max(0, Math.round(i + (i / otherSum) * diff))));
      }
    } else if (fixedField === 'cash') {
      const otherSum = m + i + a;
      if (otherSum > 0) {
        setMiningPct(Math.max(0, Math.round(m + (m / otherSum) * diff)));
        setInfraPct(Math.max(0, Math.round(i + (i / otherSum) * diff)));
        setAgriPct(Math.max(0, 100 - c - Math.max(0, Math.round(m + (m / otherSum) * diff)) - Math.max(0, Math.round(i + (i / otherSum) * diff))));
      }
    }
  };

  // Calculated metrics
  const calculatedMetrics = useMemo(() => {
    // Historic and model base IRR: Mining 18.2%, Infra 13.6%, Agri 12.9%, Cash 4.2% (Treasury bill equivalent)
    const expectedYield =
      (miningPct * 18.2 + infraPct * 13.6 + agriPct * 12.9 + cashPct * 4.2) / 100;

    // Sharpe ratio model based on asset correlations
    const baseSharpe = 1.9 + (infraPct * 0.008) + (agriPct * 0.006) - (miningPct * 0.002);

    // 5-year capital projection (compound)
    const fiveYearValuation = ticketSize * Math.pow(1 + expectedYield / 100, 5);
    const cumulativeReturn = fiveYearValuation - ticketSize;

    // Annual cash distributions
    const annualDistribution = ticketSize * (expectedYield * 0.75 / 100);

    // ESG and Carbon sequestration index
    const carbonOffsetTons = Math.round(ticketSize * 1000 * ((agriPct * 0.5 + infraPct * 0.3) / 100));

    return {
      expectedYield,
      baseSharpe: Math.min(2.8, Math.max(1.8, baseSharpe)),
      fiveYearValuation,
      cumulativeReturn,
      annualDistribution,
      carbonOffsetTons,
    };
  }, [ticketSize, miningPct, infraPct, agriPct, cashPct]);

  const handleExportModel = () => {
    const content = `GLOBAL PRECISION INVESTMENT - CAPITAL ALLOCATION MODEL
Date Generated: ${new Date().toISOString()}
Planned Ticket Size: $${ticketSize} Million USD

PORTFOLIO WEIGHTING:
- Modern Mining & Battery Metals: ${miningPct}% ($${((ticketSize * miningPct) / 100).toFixed(1)}M)
- Industrial Supply & Logistics: ${infraPct}% ($${((ticketSize * infraPct) / 100).toFixed(1)}M)
- Sustainable Agriculture: ${agriPct}% ($${((ticketSize * agriPct) / 100).toFixed(1)}M)
- Sovereign Cash & Liquidity Buffer: ${cashPct}% ($${((ticketSize * cashPct) / 100).toFixed(1)}M)

PROJECTED METRICS:
- Net Annualized Expected IRR: ${calculatedMetrics.expectedYield.toFixed(2)}%
- Risk-Adjusted Sharpe Ratio: ${calculatedMetrics.baseSharpe.toFixed(2)}
- 5-Year Capital Projection: $${calculatedMetrics.fiveYearValuation.toFixed(1)}M USD
- Cumulative 5-Year Gain: +$${calculatedMetrics.cumulativeReturn.toFixed(1)}M USD
- Annualized Cash Distribution: $${calculatedMetrics.annualDistribution.toFixed(1)}M USD/yr
- Projected Carbon Offset: ${calculatedMetrics.carbonOffsetTons.toLocaleString()} Metric Tons/yr

Audited Standard: Basel III Tier-1 Sovereign Compliant`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GPI-Allocation-Model-${ticketSize}M.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <section id="allocation" className="py-16 bg-[#f8f9ff] border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              <span>Interactive Portfolio Optimization</span>
              <span aria-hidden="true">·</span>
              <span>Dynamic Stress-Testing</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#0f2c59] tracking-tight">
              Capital Allocation & Rebalancing Engine
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Simulate mandate deployment sizes and fine-tune division weighting to achieve targeted
            yield hurdle rates and liquidity horizons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white border border-[#e2e8f0] rounded-lg p-6 lg:p-8 shadow-xs space-y-8">
            {/* Ticket Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0f2c59]">
                  Institutional Mandate Size (USD)
                </label>
                <span className="text-2xl font-bold font-display text-[#0f2c59] font-mono tabular-nums">
                  ${ticketSize} Million
                </span>
              </div>

              {/* Preset Ticket Size Buttons */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[50, 100, 250, 500].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setTicketSize(amount)}
                    className={`py-2 text-xs font-semibold rounded-[0.25rem] cursor-pointer transition-colors ${
                      ticketSize === amount
                        ? 'bg-[#0f2c59] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    ${amount}M USD
                  </button>
                ))}
              </div>

              {/* Slider for fine adjustment */}
              <input
                type="range"
                min="25"
                max="1000"
                step="25"
                value={ticketSize}
                onChange={(e) => setTicketSize(Number(e.target.value))}
                className="w-full accent-[#0f2c59] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>$25M</span>
                <span>$250M</span>
                <span>$500M</span>
                <span>$1,000M</span>
              </div>
            </div>

            {/* Division Sliders */}
            <div className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0f2c59]">
                  Division Weighting (% Allocation)
                </span>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-[#0f2c59] flex items-center gap-1 cursor-pointer font-medium"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset to Benchmark</span>
                </button>
              </div>

              {/* Slider 1: Modern Mining */}
              <div className="bg-[#fffdf5] border border-amber-200/80 rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-[0.25rem] bg-[#f9a825]"></span>
                    <span className="text-xs font-bold text-[#0f2c59]">
                      Modern Mining & Battery Extraction
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-[#835400] tabular-nums">
                    {miningPct}% (${((ticketSize * miningPct) / 100).toFixed(1)}M)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={miningPct}
                  onChange={(e) => updateMining(Number(e.target.value))}
                  className="w-full accent-[#f9a825] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>Hurdle IRR: 18.2%</span>
                  <span>Direct Lithium & Autonomous Iron Ore</span>
                </div>
              </div>

              {/* Slider 2: Infrastructure */}
              <div className="bg-[#f8fafc] border border-slate-200 rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-[0.25rem] bg-[#0f2c59]"></span>
                    <span className="text-xs font-bold text-[#0f2c59]">
                      Industrial Supply & Logistics Infrastructure
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-[#0f2c59] tabular-nums">
                    {infraPct}% (${((ticketSize * infraPct) / 100).toFixed(1)}M)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={infraPct}
                  onChange={(e) => updateInfra(Number(e.target.value))}
                  className="w-full accent-[#0f2c59] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>Hurdle IRR: 13.6%</span>
                  <span>Automated Ports & Cryogenic Bunkers</span>
                </div>
              </div>

              {/* Slider 3: Agriculture */}
              <div className="bg-[#f0fdf4] border border-emerald-200/80 rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-[0.25rem] bg-emerald-600"></span>
                    <span className="text-xs font-bold text-[#0f2c59]">
                      Sustainable Agriculture & Biospheric Yield
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-emerald-800 tabular-nums">
                    {agriPct}% (${((ticketSize * agriPct) / 100).toFixed(1)}M)
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={agriPct}
                  onChange={(e) => updateAgri(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>Hurdle IRR: 12.9%</span>
                  <span>Aeroponic Biospheres & Biochar Reserves</span>
                </div>
              </div>

              {/* Slider 4: Cash Buffer */}
              <div className="bg-slate-50 border border-slate-200 rounded-md p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-[0.25rem] bg-slate-400"></span>
                    <span className="text-xs font-bold text-slate-700">
                      Sovereign Cash & Liquidity Buffer
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-slate-700 tabular-nums">
                    {cashPct}% (${((ticketSize * cashPct) / 100).toFixed(1)}M)
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={cashPct}
                  onChange={(e) => updateCash(Number(e.target.value))}
                  className="w-full accent-slate-600 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>Yield: 4.2% (T-Bills)</span>
                  <span>Immediate deployment optionality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-white border border-[#e2e8f0] rounded-lg p-6 lg:p-8 shadow-xs border-t-[3px] border-t-[#0f2c59] space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block">
                  Simulated Output Model
                </span>
                <h3 className="text-xl font-bold font-display text-[#0f2c59]">
                  Projected Return Metrics
                </h3>
              </div>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Basel III Compliant
              </span>
            </div>

            {/* Key Output Stats in Space Grotesk */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#f8fafc] border border-slate-100 rounded-md">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-1">
                  Expected IRR
                </span>
                <span className="text-3xl font-bold font-display text-[#f9a825] tabular-nums block">
                  {calculatedMetrics.expectedYield.toFixed(2)}%
                </span>
                <span className="text-[11px] text-slate-500 font-mono mt-1 block">
                  Net of all expenses
                </span>
              </div>

              <div className="p-4 bg-[#f8fafc] border border-slate-100 rounded-md">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 block mb-1">
                  Sharpe Ratio
                </span>
                <span className="text-3xl font-bold font-display text-[#0f2c59] tabular-nums block">
                  {calculatedMetrics.baseSharpe.toFixed(2)}
                </span>
                <span className="text-[11px] text-emerald-600 font-mono mt-1 block">
                  High stability index
                </span>
              </div>
            </div>

            {/* Projection Details */}
            <div className="space-y-3.5 pt-2 text-xs text-slate-700">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">5-Year Capital Projection:</span>
                <span className="font-mono font-bold text-slate-900 text-sm tabular-nums">
                  ${calculatedMetrics.fiveYearValuation.toFixed(1)}M USD
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Total 5-Year Capital Gain:</span>
                <span className="font-mono font-bold text-emerald-700 text-sm tabular-nums">
                  +${calculatedMetrics.cumulativeReturn.toFixed(1)}M USD
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Estimated Annual Cash Distribution:</span>
                <span className="font-mono font-bold text-[#0f2c59] text-sm tabular-nums">
                  ${calculatedMetrics.annualDistribution.toFixed(1)}M USD / yr
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Annualized Carbon Offset:</span>
                <span className="font-mono font-bold text-emerald-700 tabular-nums">
                  {calculatedMetrics.carbonOffsetTons.toLocaleString()} t CO₂e
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Sovereign Concession Term:</span>
                <span className="font-medium text-slate-800">25–35 Year Guarantee</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <button
                onClick={() =>
                  onOpenMandateModalWithPlan(
                    `Simulated Plan: $${ticketSize}M (Mining: ${miningPct}%, Infra: ${infraPct}%, Agri: ${agriPct}%, Cash: ${cashPct}%) | Expected Yield: ${calculatedMetrics.expectedYield.toFixed(
                      1
                    )}%`
                  )
                }
                className="w-full btn-gold py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Submit Allocation for Committee Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleExportModel}
                className="w-full btn-outline-navy py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Model Exported to Disk</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Export Model Memorandum (TXT)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
