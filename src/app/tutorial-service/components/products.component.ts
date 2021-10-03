import { Component, OnInit } from '@angular/core';

import { ProductService } from './../services/product.service';
import { IProduct } from './../defines/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './../templates/products.component.html',
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  product: IProduct;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.find(1);

    let item: IProduct = {
        id : 3,
        name : 'Bài viết 3',
        description: 'Nội dung bài viết 3'
    };
    this.store(item);

    let item_update: IProduct = {
        id : 22,
        name : 'Bài viết 22',
        description: 'Nội dung bài viết 22'
    };

    this.update(2, item_update);

    //delete id 1
    this.destroy(1);
  }

  getAll(){
    this.products = this.productService.getAll();
  }

  find( id:number ){
    this.product = this.productService.find( id );
  }

  store( item:IProduct ):void{
    this.productService.store( item );
  }

  update( id:number, item:IProduct ):void {
    this.productService.update( id, item);
  }

  destroy( id:number):void {
    this.productService.destroy( id);
  }

}
