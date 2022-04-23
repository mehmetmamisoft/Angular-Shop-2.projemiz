import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute:ActivatedRoute
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data;
      });
    })

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
