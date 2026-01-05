import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
  ],
})
export class AppComponent implements OnInit {
  nbItemsCart: Signal<number> = signal(0);

  nbOrderSuccessfull: Signal<number> = signal(0);

  cartService = inject(CartService);
  orderService = inject(OrderService);

  ngOnInit() {
    this.nbItemsCart = this.cartService.getNumberItemCart();
    this.nbOrderSuccessfull = this.orderService.getSuccessfullOrder();
  }
}
