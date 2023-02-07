import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FacilityType} from '../../model/facility/facility-type';
import {RentType} from '../../model/facility/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  URL_RENT_TYPE ="http://localhost:3000/rent-type";

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<RentType[]>{

    return this.httpClient.get<RentType[]>(this.URL_RENT_TYPE);
  }
}
