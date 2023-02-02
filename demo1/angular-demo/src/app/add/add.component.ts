import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student:Student={id:0,name:"",birthDay:""};
@Output() eventCreate=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  createStudent() {
    // @ts-ignore
    this.eventCreate.emit(this.student)
    this.student={id:0,name:'',birthDay:""};
  }

}
