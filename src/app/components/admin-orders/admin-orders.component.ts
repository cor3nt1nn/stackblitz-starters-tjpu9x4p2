import { Component, inject, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Order } from '../../model/order';

@Component({
  selector: 'app-admin-orders',
  imports: [MatExpansionModule],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css',
})
export class AdminOrdersComponent implements OnInit {
  listOrders: Order[] = [];
  orderService = inject(OrderService);

  ngOnInit() {
    // get the list of orders
    this.listOrders = this.orderService.getOrders();
  }
}
