export interface ProductOrder {
  products: { id: string; quantity: number }[];
  total: number;
}
