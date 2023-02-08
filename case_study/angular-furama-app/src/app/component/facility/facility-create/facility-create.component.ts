import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../../service/facility/facility.service';
import {RentType} from '../../../model/facility/rent-type';
import {FacilityTypeService} from '../../../service/facility/facility-type.service';
import {FacilityType} from '../../../model/facility/facility-type';
import {RentTypeService} from '../../../service/facility/rent-type.service';
import {Facility} from '../../../model/facility/facility';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
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
  private router:Router)
  {
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

  ngOnInit(): void {
  }

  saveFacility() {
    this.facility=this.facilityForm.value;
    this.facility.id=this.facilitys.length+1
    this.facilityService.saveFacility(this.facility).subscribe(data=>{
      alert('Thêm thành công');
      this.router.navigateByUrl('/facility');
    })
  }
  get facilityFormValue(){
    return this.facilityForm.controls;
  }
}
