import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../../../model/facility/facility-type';
import {Facility} from '../../../model/facility/facility';
import {RentType} from '../../../model/facility/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../../service/facility/facility.service';
import {RentTypeService} from '../../../service/facility/rent-type.service';
import {FacilityTypeService} from '../../../service/facility/facility-type.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  facilityTypes:FacilityType[]=[];
  facility:Facility={};
  facilitys:Facility[]=[];
  rentTypes:RentType[]=[];
  facilityForm:FormGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl('',[Validators.required,Validators.pattern("^([A-Za-z][a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*[ ])*([A-Za-z][a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*)$"),Validators.maxLength(50)]),
    area:new FormControl('',[Validators.required,Validators.min(0)]),
    cost:new FormControl('',[Validators.required,Validators.min(0)]),
    maxPeople:new FormControl('',[Validators.required,Validators.min(0)]),
    standardRoom:new FormControl('',[Validators.required]),
    desciption:new FormControl('',[Validators.required]),
    poolArea:new FormControl('',[Validators.required,Validators.min(0)]),
    numberOfFloors:new FormControl('',[Validators.required,Validators.min(0)]),
    facilityFree:new FormControl('',[Validators.required]),
    facilityType:new FormControl('',[Validators.required]),
    rentType:new FormControl('',[Validators.required]),
  })

  constructor(private facilityService:FacilityService,private rentTypeService:RentTypeService,private facilityTypeService:FacilityTypeService,
              private router:Router,private activatedRoute:ActivatedRoute)
  {
   this.activatedRoute.paramMap.subscribe(data=>{
     const id=data.get('id');
     this.facilityService.findById(Number(id)).subscribe(data=>{
       this.facility=data;
       this.facilityForm.patchValue(this.facility);
     })
   })
  }

  ngOnInit(): void {
    this.facilityTypeService.getAll().subscribe(data=>{
      this.facilityTypes=data;
    });
    this.rentTypeService.getAll().subscribe(data=>{
      this.rentTypes=data;
    });
    this.facilityService.getALL().subscribe(data=>{
      this.facilitys=data;
    })
  }

  updataFacility() {
    this.facility=this.facilityForm.value;
    console.log(this.facility);
    this.facilityService.updateFacility(this.facility).subscribe(data=>{
      alert('Sửa thành công');
      this.router.navigateByUrl('/facility');
    })
  }
  get facilityFormValue(){
    return this.facilityForm.controls;
  }
  compareWithFacilityType(o1: FacilityType, o2: FacilityType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
  compareWithRentType(o1: RentType, o2: RentType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
