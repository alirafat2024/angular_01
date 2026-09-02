import { Component } from '@angular/core';
import {PorductsCard } from '../porducts-card/porducts-card';
@Component({
  imports: [PorductsCard],
  selector: 'app-products-grid',
  styleUrl: './products-grid.css',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {}
