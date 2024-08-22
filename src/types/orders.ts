export interface Order {
  amount: string;
  price: string;
  remain: string;
  value: string;
}

export interface Orders {
  orders: Order[];
  volume: number;
}
