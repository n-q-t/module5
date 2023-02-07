import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../../model/facility/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
URL_FACILITY  ="http://localhost:3000/facility";

  constructor(private httpClient:HttpClient) { }

  getALL():Observable<Facility[]>{
    return this.httpClient.get<Facility[]>(this.URL_FACILITY);
  }

  findById(id:number):Observable<Facility>{
    return this.httpClient.get<Facility>(this.URL_FACILITY+'/'+id);
  }

  saveFacility(facility:Facility){
    return this.httpClient.post(this.URL_FACILITY,facility);
  }

  updateFacility(facility:Facility){
    return this.httpClient.patch(this.URL_FACILITY+'/'+facility.id,facility);
  }

  deleteFacility(id:any){
    return this.httpClient.delete(this.URL_FACILITY+'/'+id,id);
  }
}
