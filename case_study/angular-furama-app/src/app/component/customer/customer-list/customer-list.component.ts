import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {Customer} from '../../../model/customer/customer';
import {CustomerType} from '../../../model/customer/customer-type';
import {CustomerTypeService} from '../../../service/customer/customer-type.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  p: number = 1;
  customer:Customer={};
  customers:Customer[]=[];
  customerTypes:CustomerType[]=[];
  constructor(private customerService:CustomerService,private customerTypeService:CustomerTypeService) {

  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(data=>{
      this.customers=data;
    });
    // this.search;
    this.customerTypeService.getAll().subscribe(data=>{
      this.customerTypes=data;
    })
  }

  deleteCustomer(id: any) {
    this.customerService.deleteCustomer(parseInt(id)).subscribe(data=>{
      this.ngOnInit();
      alert('Xóa thành công');
    })
  }

  search(name: string, customerType: string) {
    this.customerService.search(name,customerType).subscribe(data=>{
      this.customers=data;
      console.log(name);

    })
  }
}
