import { Route } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerInformationsComponent } from './components/customer-informations/customer-informations.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Route[] = [
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'customer-informations',
    component: CustomerInformationsComponent,
  },
  {
    path: 'order-summary',
    component: OrderSummaryComponent,
  },
  {
    path: 'admin-orders',
    component: AdminOrdersComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: '**',
    component: DashboardComponent,
  },
];
