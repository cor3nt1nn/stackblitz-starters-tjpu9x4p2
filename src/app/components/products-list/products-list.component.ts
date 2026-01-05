import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Product } from '../../model/product';

@Component({
  selector: 'app-products-list',
  imports: [MatExpansionModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products: Product[] = [];
}
