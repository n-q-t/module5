import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  getAll(): Observable<BenhNhan[]> {
    return this.httpClient.get<BenhNhan[]>(this.URL);
  }

  getAllBenhAn(): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>(this.URL_BENHAN);
  }

  findById(id: number): Observable<BenhNhan> {
    return this.httpClient.get<BenhNhan>(this.URL + '/' + id);
  }

  edit(benhNhan: BenhNhan) {
    return this.httpClient.patch(this.URL + '/' + benhNhan.id, benhNhan);
  }

  delete(id: any) {
    return this.httpClient.delete(this.URL + '/' + id, id);
  }

  save(benhNhan:BenhNhan){
    return this.httpClient.post(this.URL,benhNhan);
  }
}
