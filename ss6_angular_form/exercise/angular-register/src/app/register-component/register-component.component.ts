import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  countrys = [{id: 1, name: 'VN'}, {id: 2, name: 'Japan'}, {id: 3, name: 'Korea'}]
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
        email: new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$")]),
      //   password: new FormControl('',[Validators.minLength(6),Validators.required]),
      //   confirmPassword: new FormControl('',[Validators.minLength(6),Validators.required]),
      //   country: new FormControl('',[Validators.required]),
      //   age: new FormControl('',[Validators.min(18),Validators.required]),
      //   gender: new FormControl('',[Validators.required]),
      //   phone: new FormControl('',[Validators.required,Validators.pattern("^\\+84\\d{9,10}$")]),
      }
    )
  }


  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
  get contactFormValue(){
    return this.contactForm.controls;
  }
  onPasswordChange() {
    if (this.contactFormValue.confirmPassword.value == this.contactFormValue.password.value) {
      this.contactFormValue.confirmPassword.setErrors(null);
    } else {
      this.contactFormValue.confirmPassword.setErrors({ mismatch: true });
    }
  }
}

