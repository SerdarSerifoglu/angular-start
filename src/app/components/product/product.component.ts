import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [
    { id: 1, name: "Laptop", categoryId: 1, unitPrice: 40 },
    { id: 2, name: "Masa", categoryId: 1, unitPrice: 2 },
    { id: 3, name: "Sandalye", categoryId: 1, unitPrice: 1 },
    { id: 4, name: "Lamba", categoryId: 1, unitPrice: 1 }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
