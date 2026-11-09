import React, { useState, useMemo } from 'react';
import { Asset, DivisionId, AssetStatus } from '../types';
import {
  Search,
  Filter,
  ArrowUpDown,
  Download,
  Eye,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface AssetLedgerTableProps {
  assets: Asset[];
  selectedDivisionFilter: DivisionId | 'all';
  onSelectDivisionFilter: (divisionId: DivisionId | 'all') => void;
  onSelectAsset: (asset: Asset) => void;
  onExportCsv: () => void;
}

type SortField = 'code' | 'name' | 'currentValuation' | 'capitalDeployed' | 'irr' | 'annualizedYield' | 'esgScore';

export const AssetLedgerTable: React.FC<AssetLedgerTableProps> = ({
  assets,
  selectedDivisionFilter,
  onSelectDivisionFilter,
  onSelectAsset,
  onExportCsv,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('currentValuation');
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  // Filter and sort assets
  const filteredAssets = useMemo(() => {
    return assets
      .filter((asset) => {
        // Division filter
        if (selectedDivisionFilter !== 'all' && asset.division !== selectedDivisionFilter) {
          return false;
        }
        // Status filter
        if (statusFilter !== 'all' && asset.status !== statusFilter) {
          return false;
        }
        // Search query
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const match =
            asset.name.toLowerCase().includes(q) ||
            asset.code.toLowerCase().includes(q) ||
            asset.location.toLowerCase().includes(q) ||
            asset.jurisdiction.toLowerCase().includes(q) ||
            asset.counterparty.toLowerCase().includes(q);
          if (!match) return false;
        }
        return true;
      })
      .sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];
        if (typeof valA === 'string') {
          return sortAsc
            ? (valA as string).localeCompare(valB as string)
            : (valB as string).localeCompare(valA as string);
        }
        return sortAsc
          ? (valA as number) - (valB as number)
          : (valB as number) - (valA as number);
      });
  }, [assets, selectedDivisionFilter, statusFilter, searchQuery, sortField, sortAsc]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false); // default descending for financial metrics
    }
  };

  const getDivisionTag = (division: DivisionId) => {
    switch (division) {
      case 'mining':
        return (
          <span className="text-[11px] font-semibold text-[#835400] bg-[#fef9c3] px-2 py-0.5 rounded-[0.25rem] inline-block whitespace-nowrap">
            Modern Mining
          </span>
        );
      case 'infrastructure':
        return (
          <span className="text-[11px] font-semibold text-[#0f2c59] bg-[#e2e8f0] px-2 py-0.5 rounded-[0.25rem] inline-block whitespace-nowrap">
            Infrastructure
          </span>
        );
      case 'agriculture':
        return (
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-[0.25rem] inline-block whitespace-nowrap">
            Sustainable Agri
          </span>
        );
    }
  };

  const getStatusBadge = (status: AssetStatus) => {
    switch (status) {
      case 'Yielding':
        return (
          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block whitespace-nowrap">
            Yielding
          </span>
        );
      case 'Active':
        return (
          <span className="text-[11px] font-medium text-[#0f2c59] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full inline-block whitespace-nowrap">
            Active
          </span>
        );
      case 'Matured':
        return (
          <span className="text-[11px] font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full inline-block whitespace-nowrap">
            Matured
          </span>
        );
      case 'Auditing':
        return (
          <span className="text-[11px] font-medium text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full inline-block whitespace-nowrap">
            Auditing
          </span>
        );
    }
  };

  return (
    <section id="ledger" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              <span>Audited Global Custody Ledger</span>
              <span aria-hidden="true">·</span>
              <span>Direct Asset-Level Transparency</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-[#0f2c59] tracking-tight">
              Sovereign Asset & Concession Ledger
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onExportCsv}
              className="btn-outline-navy px-4 py-2 text-xs uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-4 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Division Selector Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 lg:pb-0">
            <button
              onClick={() => onSelectDivisionFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[0.25rem] whitespace-nowrap cursor-pointer transition-colors ${
                selectedDivisionFilter === 'all'
                  ? 'bg-[#0f2c59] text-white'
                  : 'text-slate-600 hover:text-[#0f2c59] hover:bg-slate-200/60'
              }`}
            >
              All Divisions ({assets.length})
            </button>
            <button
              onClick={() => onSelectDivisionFilter('mining')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[0.25rem] whitespace-nowrap cursor-pointer transition-colors ${
                selectedDivisionFilter === 'mining'
                  ? 'bg-[#0f2c59] text-white'
                  : 'text-slate-600 hover:text-[#0f2c59] hover:bg-slate-200/60'
              }`}
            >
              Modern Mining (4)
            </button>
            <button
              onClick={() => onSelectDivisionFilter('infrastructure')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[0.25rem] whitespace-nowrap cursor-pointer transition-colors ${
                selectedDivisionFilter === 'infrastructure'
                  ? 'bg-[#0f2c59] text-white'
                  : 'text-slate-600 hover:text-[#0f2c59] hover:bg-slate-200/60'
              }`}
            >
              Infrastructure (4)
            </button>
            <button
              onClick={() => onSelectDivisionFilter('agriculture')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-[0.25rem] whitespace-nowrap cursor-pointer transition-colors ${
                selectedDivisionFilter === 'agriculture'
                  ? 'bg-[#0f2c59] text-white'
                  : 'text-slate-600 hover:text-[#0f2c59] hover:bg-slate-200/60'
              }`}
            >
              Sustainable Agri (4)
            </button>
          </div>

          {/* Search and Status Select */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input adhering to spec: height 42px, border 1px solid #cbd5e1 */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search code, asset, jurisdiction..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[42px] pl-9 pr-3 text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-900 placeholder-slate-400 focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/15 transition-all"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-[42px] px-3 text-xs bg-white border border-[#cbd5e1] rounded-[0.25rem] text-slate-700 font-medium focus:outline-hidden focus:border-[#0f2c59] focus:ring-3 focus:ring-[#0f2c59]/15 cursor-pointer"
            >
              <option value="all">All Operational Statuses</option>
              <option value="Yielding">Yielding</option>
              <option value="Active">Active</option>
              <option value="Matured">Matured</option>
              <option value="Auditing">Auditing</option>
            </select>
          </div>
        </div>

        {/* Data Table Container */}
        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-2xs bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Header row styled in #f8fafc with 11px uppercase slate #64748b text and strict letter spacing (0.05em) */}
              <thead>
                <tr className="bg-[#f8fafc] border-b border-slate-200 text-[11px] font-semibold text-[#64748b] uppercase tracking-[0.05em]">
                  <th
                    onClick={() => handleSort('code')}
                    className="py-3.5 px-4 cursor-pointer hover:text-[#0f2c59] whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1">
                      <span>Asset Code</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('name')}
                    className="py-3.5 px-4 cursor-pointer hover:text-[#0f2c59] whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1">
                      <span>Facility / Concession</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-3.5 px-4 whitespace-nowrap">Division</th>
                  <th className="py-3.5 px-4 whitespace-nowrap">Jurisdiction</th>
                  <th
                    onClick={() => handleSort('capitalDeployed')}
                    className="py-3.5 px-4 text-right cursor-pointer hover:text-[#0f2c59] whitespace-nowrap"
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>Deployed</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('currentValuation')}
                    className="py-3.5 px-4 text-right cursor-pointer hover:text-[#0f2c59] whitespace-nowrap"
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>Valuation</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('irr')}
                    className="py-3.5 px-4 text-right cursor-pointer hover:text-[#0f2c59] whitespace-nowrap"
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>IRR</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort('annualizedYield')}
                    className="py-3.5 px-4 text-right cursor-pointer hover:text-[#0f2c59] whitespace-nowrap"
                  >
                    <div className="flex items-center justify-end gap-1">
                      <span>Yield</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-3.5 px-4 text-center whitespace-nowrap">Grade</th>
                  <th className="py-3.5 px-4 text-center whitespace-nowrap">Status</th>
                  <th className="py-3.5 px-4 text-right whitespace-nowrap">Action</th>
                </tr>
              </thead>

              {/* Body: Row lines use 1px solid #f1f5f9. Alternating hover background #f8fafc. Numeric right-aligned with tabular-nums */}
              <tbody className="divide-y divide-[#f1f5f9] text-xs text-slate-800">
                {filteredAssets.length === 0 ? (
                  <tr>
                    <td colSpan={11} className="py-12 text-center text-slate-500">
                      No assets found matching the selected filter criteria.
                    </td>
                  </tr>
                ) : (
                  filteredAssets.map((asset) => (
                    <tr
                      key={asset.id}
                      onClick={() => onSelectAsset(asset)}
                      className="hover:bg-[#f8fafc] transition-colors cursor-pointer group"
                    >
                      {/* Code */}
                      <td className="py-3.5 px-4 font-mono font-semibold text-[#0f2c59] whitespace-nowrap">
                        {asset.code}
                      </td>

                      {/* Name & Location */}
                      <td className="py-3.5 px-4 font-medium text-[#0d1c2e]">
                        <div className="font-semibold text-slate-900 group-hover:text-[#1e4d8c] transition-colors">
                          {asset.name}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {asset.location}
                        </div>
                      </td>

                      {/* Division */}
                      <td className="py-3.5 px-4">{getDivisionTag(asset.division)}</td>

                      {/* Jurisdiction */}
                      <td className="py-3.5 px-4 text-slate-600 font-medium whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          {asset.sovereignGuarantee && (
                            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          )}
                          <span className="truncate max-w-[180px]">{asset.jurisdiction}</span>
                        </div>
                      </td>

                      {/* Deployed */}
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums text-slate-600">
                        ${asset.capitalDeployed.toLocaleString()}M
                      </td>

                      {/* Valuation */}
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums font-semibold text-[#0f2c59]">
                        ${asset.currentValuation.toLocaleString()}M
                      </td>

                      {/* IRR */}
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums font-bold text-[#f9a825]">
                        {asset.irr.toFixed(1)}%
                      </td>

                      {/* Yield */}
                      <td className="py-3.5 px-4 text-right font-mono tabular-nums font-semibold text-emerald-600">
                        {asset.annualizedYield.toFixed(1)}%
                      </td>

                      {/* Grade */}
                      <td className="py-3.5 px-4 text-center">
                        <span className="font-mono font-bold text-[11px] px-1.5 py-0.5 rounded-xs bg-slate-100 text-[#0f2c59]">
                          {asset.riskGrade}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 text-center">{getStatusBadge(asset.status)}</td>

                      {/* Action */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectAsset(asset);
                          }}
                          className="px-2.5 py-1 text-[11px] font-semibold text-[#0f2c59] bg-slate-100 hover:bg-[#0f2c59] hover:text-white rounded-[0.25rem] transition-colors inline-flex items-center gap-1"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Audit</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer Summary */}
          <div className="bg-[#f8fafc] border-t border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between text-xs text-slate-500">
            <div>
              Showing <span className="font-semibold text-slate-800">{filteredAssets.length}</span> of{' '}
              <span className="font-semibold text-slate-800">{assets.length}</span> institutional
              assets
            </div>
            <div className="flex items-center gap-6 font-mono">
              <div>
                Total Valuation Displayed:{' '}
                <span className="font-bold text-[#0f2c59] tabular-nums">
                  $
                  {(
                    filteredAssets.reduce((sum, a) => sum + a.currentValuation, 0) / 1000
                  ).toFixed(2)}
                  B
                </span>
              </div>
              <div>
                Weighted IRR:{' '}
                <span className="font-bold text-[#f9a825] tabular-nums">
                  {filteredAssets.length > 0
                    ? (
                        filteredAssets.reduce((sum, a) => sum + a.irr * a.currentValuation, 0) /
                        filteredAssets.reduce((sum, a) => sum + a.currentValuation, 0)
                      ).toFixed(1)
                    : '0.0'}
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
