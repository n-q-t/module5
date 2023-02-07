import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL_PRODUCT="http://localhost:3000/product";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.URL_PRODUCT);
  }

  saveProduct(product:Product){
    return this.httpClient.post(this.URL_PRODUCT,product);
  }

  findById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(this.URL_PRODUCT+"/"+id);
  }

  updateProduct(product:Product){
    return this.httpClient.patch(this.URL_PRODUCT+"/"+product.id,product);
  }

  deleteProduct(id:any){
    return this.httpClient.delete(this.URL_PRODUCT+"/"+id,id);
  }
}
