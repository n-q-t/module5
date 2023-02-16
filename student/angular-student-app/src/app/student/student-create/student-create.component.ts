import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../student";
import {Clazz} from "../../clazz";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
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

  constructor(private studentService: StudentService, private router: Router) {
    this.studentService.getAllClazz().subscribe(data => {
      this.clazzs = data;
    })
  }

  ngOnInit(): void {
  }

  get formStudentValue() {
    return this.formStudent.controls;
  }

  save() {
    this.student=this.formStudent.value;
    this.studentService.save(this.student).subscribe(data=>{
      alert('Thêm thành công');
      this.router.navigateByUrl('/');
    })
  }

  checkDateOfBirth(control:AbstractControl){

    // ngày sau lớn hơn ngày trước
    // const date=this.formStudent.controls.dayOfBirth.value;

    const today=new Date();
    const birthDate=new Date(control.value);
    return birthDate.getTime()-today.getTime()>=0?{ 'invalidDate': true } : null;
  }

  checkName(target: any) {
    let name = target.value;
    console.log(name)
    this.studentService.getStudent(name).subscribe(data => {
      console.log(data);
      if (data.length==0){
        this.formStudentValue.name.setErrors(null);
      }else {
        this.formStudentValue.name.setErrors({check:true});
      }
    })
  }
}
