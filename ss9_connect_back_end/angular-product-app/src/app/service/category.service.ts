import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL_CATEGORY = "http://localhost:3000/category";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.URL_CATEGORY);
  }

  saveCategory(category: Category){
    return this.httpClient.post(this.URL_CATEGORY,category);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.URL_CATEGORY + "/" + id);
  }

  updateCategory(category: Category) {
    return this.httpClient.patch(this.URL_CATEGORY + "/" + category.id, category);
  }

  deleteCategory(id: any) {
    return this.httpClient.delete(this.URL_CATEGORY + "/" + id, id);
  }
}
