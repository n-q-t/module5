import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../../service/contract/contract.service';
import {Contract} from '../../../model/contract/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts:Contract[]=[];
  contract:Contract={};
  constructor(private contractService:ContractService) {

  }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(data=>{
      this.contracts=data;
    })
  }

  deleteContract(id: any) {

    if (id!=null){
      alert('Xoá thành công');
      this.contractService.deleteById(id).subscribe(data=>{
    });
      this.ngOnInit();
    }

  }
}
