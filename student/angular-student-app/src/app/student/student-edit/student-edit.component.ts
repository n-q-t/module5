import { Component, OnInit } from '@angular/core';
import {Student} from "../../student";
import {Clazz} from "../../clazz";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student = {};
  clazzs: Clazz[] = [];
  formStudent: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required, Validators.pattern("^HS-[0-9]{4}$")]),
    name: new FormControl('', [Validators.required,Validators.pattern("^([A-Z][a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*[ ])*([A-Z][a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*)$"),Validators.maxLength(50)]),
    dayOfBirth: new FormControl('', [Validators.required,this.checkDateOfBirth]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    clazz: new FormControl('', [Validators.required]),
  })

  constructor(private studentService: StudentService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      this.studentService.findById(Number(id)).subscribe(data => {
        this.student = data;
        this.formStudent.patchValue(this.student);
      })
    });
    this.studentService.getAllClazz().subscribe(data => {
      this.clazzs = data;
    })
  }

  ngOnInit(): void {
  }

  get formStudentValue() {
    return this.formStudent.controls;
  }

  edit() {
    this.student=this.formStudent.value;
    this.studentService.update(this.student).subscribe(data=>{
      alert('Sửa thành công');
      this.router.navigateByUrl('/');
    })
  }
  compareWith(o1: Clazz, o2: Clazz): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  checkDateOfBirth(control:AbstractControl){
    const today=new Date();
    const birthDate=new Date(control.value);
    return today.getTime()-birthDate.getTime()>=0?{ 'invalidDate': true } : null;
  }
}
