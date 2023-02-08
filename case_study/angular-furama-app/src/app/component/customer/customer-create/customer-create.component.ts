import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../../model/customer/customer-type';
import {CustomerTypeService} from '../../../service/customer/customer-type.service';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes:CustomerType[]=[];
  customer:Customer={};
  customers:Customer[]=[];

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

  constructor(private customerTypeService:CustomerTypeService,private customerService:CustomerService,private router:Router) {
    this.customerTypeService.getAll().subscribe(data=>{
      this.customerTypes=data;
      console.log(this.customerTypes);
    });
    this.customerService.getAll().subscribe(data=>{
      this.customers=data;
    })
  }

  ngOnInit(): void {
  }

  get customerFormValue(){
    return this.customerForm.controls;
  }

  saveCustomer() {
    this.customer=this.customerForm.value;
    this.customer.id=this.customers.length+1;
    console.log(this.customer.id);
    this.customerService.saveCustomer(this.customer).subscribe(data=>{
      alert('Thêm thành công');
      this.router.navigateByUrl('/customer')
    })
  }
}
