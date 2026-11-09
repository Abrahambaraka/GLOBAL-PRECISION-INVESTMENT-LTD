export type DivisionId = 'mining' | 'infrastructure' | 'agriculture';

export type AssetStatus = 'Active' | 'Yielding' | 'Matured' | 'Auditing';

export type RiskGrade = 'AAA' | 'AA+' | 'AA' | 'AA-' | 'A+' | 'A' | 'BBB+';

export interface Asset {
  id: string;
  code: string;
  name: string;
  division: DivisionId;
  location: string;
  jurisdiction: string;
  capitalDeployed: number; // in USD millions
  currentValuation: number; // in USD millions
  irr: number; // percentage, e.g. 19.4
  annualizedYield: number; // percentage, e.g. 14.8
  status: AssetStatus;
  riskGrade: RiskGrade;
  esgScore: number; // out of 100
  autonomousRatio: number; // percentage
  outputMetric: string;
  lastAudited: string;
  summary: string;
  imageUrl: string;
  keyHighlights: string[];
  counterparty: string;
  sovereignGuarantee: boolean;
}

export interface DivisionInfo {
  id: DivisionId;
  title: string;
  subtitle: string;
  tagline: string;
  accentColor: string;
  topBorderColor: string;
  bgTint: string;
  totalAum: number; // in billions
  annualIrr: number; // percentage
  assetCount: number;
  description: string;
  highlights: string[];
}

export interface PortfolioKPIs {
  totalAumBillions: number;
  annualizedYieldPct: number;
  qoqYieldDelta: number;
  sovereignJurisdictionsCount: number;
  sharpeRatio: number;
  activeFacilitiesCount: number;
  q1CapitalDeploymentMillions: number;
  carbonOffsetTons: number;
}

export interface AllocationState {
  miningPct: number;
  infrastructurePct: number;
  agriculturePct: number;
  cashBufferPct: number;
  totalDeploymentMillions: number;
}

export interface LeadMandate {
  institutionName: string;
  fundType: string;
  contactName: string;
  email: string;
  jurisdiction: string;
  mandateAmountMillions: number;
  divisionInterest: DivisionId | 'all';
  timeHorizon: string;
  notes?: string;
}
