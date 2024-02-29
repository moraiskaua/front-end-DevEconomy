export interface BankAccount {
  id: string;
  name: string;
  initialBalance: number;
  currentBalance: number;
  type: 'INVESTMENT' | 'CHECKING' | 'CASH';
  color: string;
}
