import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-customer-informations',
  imports: [RouterLink, MatExpansionModule, MatDividerModule],
  templateUrl: './customer-informations.component.html',
  styleUrl: './customer-informations.component.css',
})
export class CustomerInformationsComponent {
  orderService = inject(OrderService);
  cartService = inject(CartService);
}
