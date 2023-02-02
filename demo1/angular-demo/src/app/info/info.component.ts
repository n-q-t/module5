import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../student";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
@Input() student:Student={id:0,name:'',birthDay:"00/00/0000"};
  constructor() { }

  ngOnInit(): void {
  }

}
