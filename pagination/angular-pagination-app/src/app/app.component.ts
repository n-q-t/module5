import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students= [
    {id: 1, name: 'huy', email: 'huy@gmail.com'},
    {id: 2, name: 'công', email: 'công@gmail.com'},
    {id: 3, name: 'trung', email: 'trung@gmail.com'},
    {id: 4, name: 'nam', email: 'nam@gmail.com'},
  ]
  // Pagination parameters.
  p: number = 1;
  searchValue: string = '';

  // search(value: string) {
  //   return this.student.filter(item =>
  //     item.name.toLowerCase().includes(value.toLowerCase()) ||
  //     item.email.toLowerCase().includes(value.toLowerCase())
  //   );
  // }
  data: Object=[];

  constructor(private http: HttpClient) {

  }

  searchByName(name: string) {
    console.log(name);
    this.http.get('http://localhost:3000/search?name_like=' + name+'or email_like='+name)
      .subscribe(data => {
        this.data=data;
        console.log(data);
      });
  }
}
