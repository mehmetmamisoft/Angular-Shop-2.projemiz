import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];

  ngOnInit(): void {
      this.productService.getProducts().subscribe(data=>{
        this.products=data;

      });
  }
  addToCart(product: Product) {
    //ilk hali bu alertify.success(product.name + " added");
    //const ve import olunca bu hale geldu
    //declare let diğer tarafa getti
    this.alertifyService.basarili(product.name + ' added');
    //this.alertifyService.uyari(product.name+ " added");
    //this.alertifyService.hatali(product.name+ " added");
  }
}
