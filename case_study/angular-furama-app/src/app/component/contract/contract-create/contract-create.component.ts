import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../model/customer/customer';
import {CustomerService} from '../../../service/customer/customer.service';
import {FacilityService} from '../../../service/facility/facility.service';
import {Router} from '@angular/router';
import {Facility} from '../../../model/facility/facility';
import {Contract} from '../../../model/contract/contract';
import {ContractService} from '../../../service/contract/contract.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  customers: Customer[] = [];
  facilitys: Facility[] = [];
  contract:Contract={};
  contractForm: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl('',[Validators.required]),
    customer: new FormControl('',[Validators.required]),
    facility: new FormControl('',[Validators.required]),
    startDate: new FormControl('',[Validators.required]),
    endDate: new FormControl('',[Validators.required]),
    deposit: new FormControl('',[Validators.required]),
  });

  constructor(private customerService: CustomerService, private facilityService: FacilityService, private router: Router,private contractService:ContractService) {
    this.facilityService.getALL().subscribe(data => {
      this.facilitys = data;
    });
    this.customerService.getAll().subscribe(data=>{
      this.customers=data;
    })
  }

  ngOnInit(): void {
  }

  saveContract() {
    this.contract=this.contractForm.value;
    this.contractService.saveContract(this.contract).subscribe(data=>{
      alert('Thêm thành công');
      this.router.navigateByUrl('/contract');
    })
  }

  get contractFormValue(){
    return this.contractForm.controls;
  }
}
