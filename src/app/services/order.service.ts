import { Injectable, signal, WritableSignal } from '@angular/core';
import { Order } from '../model/order';
import { mockOrder } from '../../mocks/mock-order';

@Injectable({ providedIn: 'root' })
export class OrderService {
  orders: Order[] = [];
  // Utilisation d'un signal pour afficher le nombre de produits dans le panier
  nbOrderSuccessful$: WritableSignal<number> = signal(0);
  constructor() {
    this.orders = [];
  }

  getOrders(): Order[] {
    return this.orders;
  }

  addOrder(order: Order) {
    this.orders.push(order);
    if (this.isSuccessfullOrder(order)) {
      this.nbOrderSuccessful$.update((current) => (current += 1));
    }
  }

  getSuccessfullOrder() {
    return this.nbOrderSuccessful$.asReadonly();
  }

  // Not modify this function
  isSuccessfullOrder(order: Order): boolean {
    return !!(
      order.cart.products.length &&
      order.userInfo.firstName &&
      order.userInfo.firstName.length < 30 &&
      order.userInfo.lastName &&
      order.userInfo.lastName.length < 30 &&
      order.userInfo.email &&
      order.userInfo.adress &&
      order.userInfo.adress.length < 50
    );
  }
}
