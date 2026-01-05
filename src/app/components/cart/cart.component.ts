import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ProductCart } from '../../model/product-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    RouterLink,
  ],
})
export class CartComponent implements OnInit {
  cart: ProductCart[] = [];

  cartService = inject(CartService);
  router = inject(Router);

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.cart = this.cartService.getCart();
  }

  nextStep() {
    this.router.navigate(['/customer-informations']);
  }
}
