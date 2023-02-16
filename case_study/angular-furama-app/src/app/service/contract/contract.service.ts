import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../../model/contract/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  URL_CONTRACT="http://localhost:3000/contract"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Contract[]>{
    return this.httpClient.get<Contract[]>(this.URL_CONTRACT);
  }

  saveContract(contract:Contract){
    return this.httpClient.post(this.URL_CONTRACT,contract);
  }

  deleteById(id:any){
    return this.httpClient.delete(this.URL_CONTRACT+'/'+id,id);
  }

  findById(id:number):Observable<Contract>{
    return this.httpClient.get<Contract>(this.URL_CONTRACT+'/'+id);
  }

  updateContract(contract:Contract){
    return this.httpClient.patch(this.URL_CONTRACT+'/'+contract.id,contract);

  }

  search(value: string) {
    return this.httpClient.get<Contract[]>(this.URL_CONTRACT+'?code_like='+value);
  }
}
