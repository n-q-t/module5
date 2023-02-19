import {Component, OnInit} from '@angular/core';
import {BenhNhanService} from "../../service/benh-nhan.service";
import {BenhNhan} from "../../model/benh-nhan";
import {Page} from 'ngx-pagination/dist/pagination-controls.directive';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  benhNhans: BenhNhan[] = [];
  benhNhan: BenhNhan = {};
  page: any = {};
  constructor(private benhNhanService: BenhNhanService,private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(params => {
    //   const pageNumber = params.get('page')||0;
    //   this.benhNhanService.getAll(Number(pageNumber)).subscribe(page => {
    //     this.page = page;
    //     this.benhNhans = page.content;
    //   });
    // });
    this.search('','',0);
  }


  delete(id: any) {
    this.benhNhanService.delete(id).subscribe(data => {
      if (data!=null){
        alert('Xóa thành công');
        console.log(id);
      }
    })
  }

  previous(benhNhan:string, bacSi: string,number: number) {
    // this.benhNhanService.getAll(number).subscribe(page => {
    //   this.page = page;
    //   this.benhNhans = page.content;
    // });
    this.search(benhNhan,bacSi,number);
  }

  next(benhNhan:string, bacSi: string,number: any) {
    // this.benhNhanService.getAll(number).subscribe(page => {
    //   this.page = page;
    //   this.benhNhans = page.content;
    // });
    this.search(benhNhan,bacSi,number);

  }

  search(benhNhan: string, bacSi: string,page:number) {
    this.benhNhanService.search(benhNhan,bacSi,page).subscribe(data=>{
      this.page = data;
      this.benhNhans = data.content;
    })
  }
}
