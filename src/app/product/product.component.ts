import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  constructor() {}
  title = 'Ürün Listesi'
  products:Product[]=[
    {
      id:1,name:"Masaüstü",price:6619, categoryId:1,
      description:"Hp 290 Pro",imageUrl:"https://images.unsplash.com/photo-1594400344473-cf8b48733c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80"
    },
    {
      id:2,name:"Dizüstü",price:3411, categoryId:2,
      description:"Hp15S ",imageUrl:"https://images.unsplash.com/photo-1561746254-01c437a23518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id:2,name:"Monitor PC",price:1870, categoryId:3,
      description:"Msi Modern",imageUrl:"https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id:2,name:"Mini Masaüstü",price:4500, categoryId:4,
      description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1594400344473-cf8b48733c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80"
    },
    {
      id:2,name:"Hazır Sistem",price:18250, categoryId:5,
      description:"A4 Tech",imageUrl:"https://i0.wp.com/bakikaracay.com/wp-content/uploads/2016/09/Kamera-I%C5%9F%C4%B1k-Foto%C4%9Fraf.jpg?fit=1600%2C1067&ssl=1"
    },
    {
      id:2,name:"Yazıcı",price:800, categoryId:6,
      description:"A4 Tech",imageUrl:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  ];

  ngOnInit(): void {}
}
