import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any;
  i: any;

  constructor(private serve: ProductService) {}

  ngOnInit(): void {
    this.serve.getproducts().subscribe((data) => {
      this.products = data;
    });
  }
}
