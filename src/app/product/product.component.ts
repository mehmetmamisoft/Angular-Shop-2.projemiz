import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  constructor() {}
  title = 'Ürün Listesi'
  products:any[];

  ngOnInit(): void {}
}
