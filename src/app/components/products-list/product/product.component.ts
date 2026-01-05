import { Component, inject, Input, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;

  cartService = inject(CartService);

  ngOnInit() {}

  addProductToCart() {
    if (this.product) {
      this.cartService.addProductToCart(this.product, 1);
    }
  }
}
