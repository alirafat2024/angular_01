import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../product';
@Component({
  imports: [MatButtonModule, MatCardModule],
  selector: 'app-porducts-card',
  styleUrl: './porducts-card.css',
  templateUrl: './porducts-card.html',
})
export class PorductsCard {}
