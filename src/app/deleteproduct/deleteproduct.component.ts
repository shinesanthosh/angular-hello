import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css'],
})
export class DeleteproductComponent implements OnInit {
  product = {
    id: '',
  };

  delete(): void {
    this.serve.deleteproduct(this.product.id).subscribe((data) => {
      alert(`The product with id ${data.id} deleted`)
    });
  }

  constructor(private serve: ProductService) {}

  ngOnInit(): void {}
}
