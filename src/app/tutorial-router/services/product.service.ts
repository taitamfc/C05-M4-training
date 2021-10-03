import { Injectable } from '@angular/core';
import { IProduct } from './../defines/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : IProduct[];
  constructor() {
    this.products = [
      {
        id : 1,
        name : 'Bài viết 1',
        description: 'Nội dung bài viết 1'
      },
      {
        id : 2,
        name : 'Bài viết 2',
        description: 'Nội dung bài viết 2'
      }
    ];
  }

  getAll(): IProduct[]{
    return this.products;
  }

  find( id:number ) : IProduct{
    let result: IProduct = {};
		for (var i = 0; i < this.products.length; i++) {
			if(this.products[i].id == id) {
				result = this.products[i];
				break;
			}
		}
		return result;
  }

  store( item:IProduct ){
    this.products.push( item )
  }
  
  update( id: number, item: IProduct ){
    for (var i = 0; i < this.products.length; i++) {
      if(this.products[i].id == id) {
        this.products[i] = item;
        break;
      }
    }
  }

  destroy( id: number){
    for (var i = 0; i < this.products.length; i++) {
      if(this.products[i].id == id) {
        console.log( this.products[i] );
        this.products.splice(i, 1);
        break;
      }
    }
  }
}