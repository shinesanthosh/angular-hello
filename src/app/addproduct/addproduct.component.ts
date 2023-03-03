import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  products = {
    id: '',
    pname: '',
    price: '',
    quantity: '',
    title: '',
  };

  add(): void {
    // console.log(this.products);
    this.products.title = this.products.pname;
    this.serve
      .addproducts(this.products)
      .subscribe((data) => {

        alert(`The data logged with the id: ${data.id}`)
        console.log(data)
      });
  }

  constructor(private serve: ProductService) {}

  ngOnInit(): void {}
}
