import {Component, OnInit} from '@angular/core';
import {BenhNhanService} from "../../service/benh-nhan.service";
import {BenhNhan} from "../../model/benh-nhan";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  benhNhans: BenhNhan[] = [];
  benhNhan: BenhNhan = {};

  constructor(private benhNhanService: BenhNhanService) {

  }

  ngOnInit(): void {
    this.benhNhanService.getAll().subscribe(data => {
      this.benhNhans = data;
    })
  }

  delete(id: any) {
    this.benhNhanService.delete(id).subscribe(data => {
      alert('Xóa thành công');
      this.ngOnInit();
    })
  }
}
