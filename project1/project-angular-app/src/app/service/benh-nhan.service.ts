import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {BenhNhan} from "../model/benh-nhan";
import {BenhAn} from '../model/benh-an';

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {
  URL = "http://localhost:8080/benhnhan"
  URL_BENHAN = "http://localhost:8080/benhan"

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
    return this.httpClient.get<any>(this.URL,{params});
  }

  getAllBenhAn(): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>(this.URL_BENHAN);
  }

  findById(id: number): Observable<BenhNhan> {
    return this.httpClient.get<BenhNhan>(this.URL + '/' + id);
  }

  edit(benhNhan: BenhNhan) {
    return this.httpClient.patch(this.URL + '/' + benhNhan.id,benhNhan);
  }

  delete(id: any) {
    return this.httpClient.delete(this.URL + '/' + id, id);
  }

  save(benhNhan:BenhNhan){
    return this.httpClient.post(this.URL,benhNhan);
  }

  search(benhNhan: string, bacSi: string,page: number):Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
    return this.httpClient.get<any>(this.URL+'/?ten='+benhNhan+'&bacSi='+bacSi,{params});
  }
}
