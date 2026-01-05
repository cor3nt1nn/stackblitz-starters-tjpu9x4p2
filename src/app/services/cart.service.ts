import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCart } from '../model/product-cart';
import { Product } from '../model/product';
import { ProductOrder } from '../model/product-order';

@Injectable({ providedIn: 'root' })
export class CartService {
  cart: ProductCart[] = [];
  // Utilisation d'un signal pour afficher le nombre de produits dans le panier
  numberItemCart$: WritableSignal<number> = signal(0);

  constructor() {}

  getCart() {
    return this.cart;
  }

  addProductToCart(product: Product | ProductCart, quantity: number) {
    const productInCart: ProductCart | undefined = this.cart.find(
      (prod) => prod.id === product.id
    );
    if (productInCart) {
      productInCart.quantity += quantity;
    } else {
      this.cart.push({ ...product, quantity });
      this.numberItemCart$.set(this.cart.length);
    }
  }

  removeProductToCart(product: Product) {
    // A compléter
  }

  getNumberItemCart(): Signal<number> {
    return this.numberItemCart$.asReadonly();
  }

  getCartForOrder(): ProductOrder {
    let total = 0;
    let products: { id: string; quantity: number }[] = [];
    this.cart.forEach((prod) => {
      products.push({ id: prod.id, quantity: prod.quantity });
      total += prod.quantity * prod.price;
    });
    return { products, total };
  }

  deleteCart() {
    this.cart = [];
  }
}
