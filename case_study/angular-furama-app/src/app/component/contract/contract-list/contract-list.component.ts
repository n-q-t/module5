import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../../service/contract/contract.service';
import {Contract} from '../../../model/contract/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  p:number=1;
  search:string='';
  contracts:Contract[]=[];
  contract:Contract={};
  constructor(private contractService:ContractService) {

  }

  ngOnInit(): void {
    // this.contractService.getAll().subscribe(data=>{
    //   this.contracts=data;
    // })
    this.searchByCode(this.search);
  }

  deleteContract(id: any) {

    if (id!=null){
      alert('Xoá thành công');
      this.contractService.deleteById(id).subscribe(data=>{
    });
      this.ngOnInit();
    }

  }

  searchByCode(value: string) {
    this.contractService.search(value).subscribe(data=>{
      console.log(data);
      this.contracts=data;
    })
    // console.log(this.p);
  }
}
