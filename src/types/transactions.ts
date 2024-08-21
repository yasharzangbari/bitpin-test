export interface Transaction {
  match_amount: string;
  match_id: string;
  price: string;
  time: number;
  type: "buy" | "sell";
  value: string;
}
