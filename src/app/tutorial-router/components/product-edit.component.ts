import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { ProductService } from './../services/product.service';
import { IProduct } from './../defines/product.interface';

//import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-product-edit',
  templateUrl: './../templates/product-edit.component.html',
})
export class ProductEditComponent implements OnInit {

  products: IProduct[] = [];
  product: IProduct;

  constructor(
    private productService: ProductService,
    private activatedRouteService: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //dùng 1 lần
    let id: number = this.activatedRouteService.snapshot.params['id'];


    //dùng khi có sự thay đổi trên url
    this.activatedRouteService.params.subscribe(
      (params: Params) => {
        let id = parseInt(params['id']);
        this.find(id);
      }
    );

    //dùng để lấy ?text=XXX&page=YYY
    this.activatedRouteService.queryParams.subscribe(
      (params: Params) => {
        // this.text = params['text'];
        // this.page = params['page'];
      }
    );

    

  }
  find( id:number ){
    this.product = this.productService.find( id );
  }
}
