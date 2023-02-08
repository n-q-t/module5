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
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });

  constructor(private customerTypeService:CustomerTypeService,private customerService:CustomerService,private router:Router) {
    this.customerTypeService.getAll().subscribe(data=>{
      this.customerTypes=data;
      console.log(this.customerTypes);
    })
  }

  ngOnInit(): void {
  }

  get customerFormValue(){
    return this.customerForm.controls;
  }

  saveCustomer() {
    this.customer=this.customerForm.value;
    this.customerService.saveCustomer(this.customer).subscribe(data=>{
      alert('Thêm thành công');
      this.router.navigateByUrl('/customer')
    })
  }
}
