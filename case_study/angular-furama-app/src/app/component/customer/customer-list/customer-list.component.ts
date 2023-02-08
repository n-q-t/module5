import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer:Customer={};
  customers:Customer[]=[];
  constructor(private customerService:CustomerService) {

  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(data=>{
      this.customers=data;
    })
  }

  deleteCustomer(id: any) {
    this.customerService.deleteCustomer(parseInt(id)).subscribe(data=>{
      this.ngOnInit();
      alert('Xóa thành công');
    })
  }
}
