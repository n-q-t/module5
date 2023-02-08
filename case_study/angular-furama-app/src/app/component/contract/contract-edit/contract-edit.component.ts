import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {Facility} from '../../../model/facility/facility';
import {Contract} from '../../../model/contract/contract';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {FacilityService} from '../../../service/facility/facility.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContractService} from '../../../service/contract/contract.service';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {
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

  constructor(private customerService: CustomerService, private facilityService: FacilityService, private router: Router,private contractService:ContractService,private activatedRoute:ActivatedRoute) {
   this.activatedRoute.paramMap.subscribe(data=>{
     const id=data.get('id');
     if (id!=null){
       this.contractService.findById(parseInt(id)).subscribe(data=>{
         this.contract=data;
         this.contractForm.patchValue(this.contract);
       },error => {},()=>{})
     }
   })
  }

  ngOnInit(): void {
    this.facilityService.getALL().subscribe(data => {
      this.facilitys = data;
    });
    this.customerService.getAll().subscribe(data=>{
      this.customers=data;
    })
  }


  get contractFormValue(){
    return this.contractForm.controls;
  }

  compareWithCustomer(o1:Customer,o2:Customer):boolean{
    return o1 && o2? o1.id===o2.id : o1===o2;
  }

  compareWithFacility(o1:Facility,o2:Facility):boolean{
    return o1 && o2? o1.id===o2.id : o1===o2;
  }

  updateContract() {
    this.contract=this.contractForm.value;
    console.log(this.contract);
    this.contractService.updateContract(this.contract).subscribe(data=>{
      alert('Thêm thành công');
      this.router.navigateByUrl('/contract');
    })
  }
}
