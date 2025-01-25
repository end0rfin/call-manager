export interface CallData {
  managerName: string;
  callCount: number;
  missedCalls: number;
  averageDuration: string;
  callDate: string;
  phoneNumber: string;
}

export interface FilterState {
  managerName: string;
  dateFrom: Date | null;
  dateTo: Date | null;
}
