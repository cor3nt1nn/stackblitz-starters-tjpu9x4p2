import { Injectable } from '@angular/core';
import { mockProductsList } from '../../mocks/mock-products';
import { Product } from '../model/product';
import { ProductCart } from '../model/product-cart';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [];
  constructor() {
    this.products = mockProductsList;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductCartById(id: string): ProductCart | undefined {
    const productCart: Partial<ProductCart> = this.products.find(
      (product) => product.id === id
    ) as Partial<ProductCart>;
    if (productCart) {
      productCart.quantity = 0;
    }
    return productCart as ProductCart;
  }
}
