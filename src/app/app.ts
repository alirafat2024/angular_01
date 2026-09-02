import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { ProductsGrid } from './components/products/products-grid/products-grid';


@Component({
  imports: [RouterOutlet,Header,ProductsGrid,],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first-app');
}
