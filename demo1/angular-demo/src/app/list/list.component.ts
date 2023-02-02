import {Component, OnInit} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  temp:Student={id:0,name:'',birthDay:""};
  students: Student[] = [
    {id: 1, name: "trung",birthDay:"1999/8/10"},
    {id: 2, name: "abc",birthDay:"1999/8/10"}
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  saveStudent(event: any) {
    this.students.push(event);
  }
}
