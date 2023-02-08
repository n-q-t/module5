import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL_CUSTOMER="http://localhost:3000/customer";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.URL_CUSTOMER);
  }

  findById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(this.URL_CUSTOMER+'/'+id);
  }

  saveCustomer(customer:Customer){
    return this.httpClient.post(this.URL_CUSTOMER,customer);
  }

  updateCustomer(customer:Customer){
    return this.httpClient.patch(this.URL_CUSTOMER+'/'+customer.id,customer);
  }

  deleteCustomer(id:any){
    return this.httpClient.delete(this.URL_CUSTOMER+'/'+id,id);
  }
}
