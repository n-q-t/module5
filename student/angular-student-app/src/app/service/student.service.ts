import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../student";
import {Clazz} from "../clazz";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
URL="http://localhost:3000/student";
URL_CLAZZ="http://localhost:3000/clazz";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.URL);
  }

  getAllClazz():Observable<Clazz[]>{
    return this.httpClient.get<Clazz[]>(this.URL_CLAZZ);
  }

  findById(id:number):Observable<Student>{
    return this.httpClient.get<Student>(this.URL+'/'+id);
  }

  save(student:Student){
    return this.httpClient.post(this.URL,student);
  }

  update(student:Student){
    return this.httpClient.patch(this.URL+'/'+student.id,student);
  }

  delete(id:any){
    return this.httpClient.delete(this.URL+'/'+id,id);
  }

  search(name:string,clazzName:string):Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.URL+'?name_like='+name+'&clazz.name_like='+clazzName);
  }

  getStudent(name:any):Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.URL+'?name='+name);
  }
}
