import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenhNhan} from "../model/benh-nhan";

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {
  URL = "http://localhost:3000/benhnhan"

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<BenhNhan[]> {
    return this.httpClient.get<BenhNhan[]>(this.URL);
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
}
