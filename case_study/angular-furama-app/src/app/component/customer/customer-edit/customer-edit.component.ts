import { Component, OnInit } from '@angular/core';
import {CustomerTypeService} from '../../../service/customer/customer-type.service';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerType} from '../../../model/customer/customer-type';
import {Customer} from '../../../model/customer/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../../model/facility/rent-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerTypes:CustomerType[]=[];
  customer:Customer={};
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required,Validators.pattern("^KH-[0-9]{4}$")]),
    name: new FormControl('', [Validators.required,Validators.pattern("^([A-Z][a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*[ ])*([A-Z][a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*)$"),Validators.maxLength(50)]),
    dateOfBirth: new FormControl('', [Validators.required]),//validate nhỏ hơn ngày hiện tại
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required,Validators.pattern("^([0-9]{9})$|^([0-9]{12})$")]),
    phoneNumber: new FormControl('', [Validators.required,Validators.pattern("^(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})$")]),
    email: new FormControl('', [Validators.required,Validators.pattern("^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$")]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });

  constructor(private customerTypeService:CustomerTypeService,private customerService:CustomerService,private router:Router,private activatedRoute:ActivatedRoute) {
   this.activatedRoute.paramMap.subscribe(data=>{
     const id=data.get('id');
     this.customerService.findById(Number(id)).subscribe(data=>{
       this.customer=data;
       this.customerForm.patchValue(this.customer);
     })
   })
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(data=>{
      this.customerTypes=data;
      console.log(this.customerTypes);
    })
  }
  get customerFormValue(){
    return this.customerForm.controls;
  }

  editCustomer() {
    this.customer=this.customerForm.value;
    this.customerService.updateCustomer(this.customer).subscribe(data=>{
      alert('Sửa thành công');
      this.router.navigateByUrl('/customer');
    })
  }
  compareWith(o1: CustomerType, o2: CustomerType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
