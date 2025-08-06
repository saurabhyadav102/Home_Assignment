// src/types.ts
export interface SalesAgent {
  id: string;
  performanceScore: number;
  seniorityMonths: number;
  targetAchievedPercent: number;
  activeClients: number;
}

export interface Allocation {
  id: string;
  assignedDiscount: number;
  justification: string;
}
