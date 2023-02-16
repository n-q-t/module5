import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {Student} from "../../student";
import {Clazz} from "../../clazz";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:Student[]=[];
  student: Student={};
  p: number = 1;
  clazzs:Clazz[]=[];


  constructor(private studentService:StudentService) {

  }

  ngOnInit(): void {
    this.studentService.getAll().subscribe(data=>{
      this.students=data;
    });
    this.studentService.getAllClazz().subscribe(data=>{
      this.clazzs=data;
    })
  }

  deleteStudent(id: any) {
    this.studentService.delete(id).subscribe(data=>{
      alert('Xóa thành công');
      this.ngOnInit();
    })
  }

  search(name: string, clazzName: string) {
    this.studentService.search(name,clazzName).subscribe(data=>{
      this.students=data;
    })
  }
}
