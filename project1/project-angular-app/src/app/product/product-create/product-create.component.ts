import { Component, OnInit } from '@angular/core';
import {BenhNhan} from '../../model/benh-nhan';
import {BenhAn} from '../../model/benh-an';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BenhNhanService} from '../../service/benh-nhan.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  benhNhan: BenhNhan = {};
  benhAns:BenhAn[]=[];
  benhNhanForm: FormGroup = new FormGroup({
    id: new FormControl(),
    benhAn: new FormControl('',[Validators.required]),
    ten: new FormControl('', [Validators.required, Validators.pattern("^([A-Z][a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*[ ])*([A-Z][a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*)$")]),
    ngayNhapVien: new FormControl('', [Validators.required]),
    ngayRaVien: new FormControl('', [Validators.required]),
    lyDo: new FormControl('', [Validators.required]),
    phuongPhap: new FormControl('', [Validators.required]),
    bacSi: new FormControl('', [Validators.required, Validators.pattern("^([A-Z][a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*[ ])*([A-Z][a-záàảạãăắằặẵâấầẫậẩéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịùúủũụưứửữựỵỷỹýỳ]*)$")]),
  })

  constructor(private benhNhanService: BenhNhanService, private router: Router) {
    this.benhNhanService.getAllBenhAn().subscribe(data=>{
      this.benhAns=data;
      console.log(this.benhAns);
    })
  }

  ngOnInit(): void {
  }

  get benhNhanFormValue() {
    return this.benhNhanForm.controls;
  }

  create() {
    this.benhNhan = this.benhNhanForm.value;
    this.benhNhanService.save(this.benhNhan).subscribe(data => {
      alert('Thêm thành công');
      this.router.navigateByUrl('/');
    })
  }

  checkNgayRaVien() {
    const nhapVien = new Date(this.benhNhanFormValue.ngayNhapVien.value);
    const raVien = new Date(this.benhNhanFormValue.ngayRaVien.value);
    if (nhapVien.getTime() - raVien.getTime() >= 0) {
      this.benhNhanFormValue.ngayRaVien.setErrors({checkDate: true});
    } else {
      this.benhNhanFormValue.ngayRaVien.setErrors(null);
    }
  }

}
