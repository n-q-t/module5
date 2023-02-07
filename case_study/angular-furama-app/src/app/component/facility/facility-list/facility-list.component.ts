import { Component, OnInit } from '@angular/core';
import {Facility} from '../../../model/facility/facility';
import {FacilityService} from '../../../service/facility/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facility:Facility={};
  facilitys:Facility[]=[];
  constructor(private facilityService:FacilityService) { }

  ngOnInit(): void {
    this.facilityService.getALL().subscribe(data=>{
      this.facilitys=data;
    },error => {},()=>{})
  }

  deleteFacility(id:any) {
    this.facilityService.deleteFacility(id).subscribe(data=>{
      this.ngOnInit();
      alert('Xóa thành công');
    })
  }
}
