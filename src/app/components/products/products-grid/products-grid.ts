import { Component, signal, computed } from '@angular/core';
import { NgFor } from '@angular/common';
import { PorductsCard } from '../porducts-card/porducts-card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { Product } from '../product';
@Component({
  imports: [NgFor, PorductsCard, MatInputModule, FormsModule],
  selector: 'app-products-grid',
  styleUrl: './products-grid.css',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {
  protected readonly searchTerm = signal('');
  name: string = 'Mohammad Ali Jan';

  protected products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 10.99,
      originalPrice: 15.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 20.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 30.99,
      originalPrice: 35.99,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
      price: 40.99,
      originalPrice: 45.99,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description for Product 5',
      price: 50.99,
      originalPrice: 55.99,
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description for Product 6',
      price: 60.99,
      originalPrice: 65.99,
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description for Product 7',
      price: 70.99,
      originalPrice: 75.99,
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description for Product 8',
      price: 80.99,
      originalPrice: 85.99,
    },
  ]);

  protected filteredProducts = computed(() => {
    const term = this.searchTerm().toLocaleLowerCase().trim();
    if (!term) {
      return this.products();
    }
    return this.products().filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term),
    );
  });

  protected clearSearch() {
    this.searchTerm.set('');
  }

  // protected termSearch(){
  //   this.searchTerm.update((term) => term.trim().toLowerCase());
  // }
}
