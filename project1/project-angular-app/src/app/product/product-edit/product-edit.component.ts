import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {BenhNhanService} from "../../service/benh-nhan.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BenhNhan} from "../../model/benh-nhan";
import {BenhAn} from '../../model/benh-an';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
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

  constructor(private benhNhanService: BenhNhanService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      this.benhNhanService.findById(Number(id)).subscribe(data => {
        this.benhNhan = data;
        console.log(this.benhNhan);
        this.benhNhanForm.patchValue(this.benhNhan);
      })
    })
    this.benhNhanService.getAllBenhAn().subscribe(data=>{
      this.benhAns=data;
    })
  }

  ngOnInit(): void {
  }

  get benhNhanFormValue() {
    return this.benhNhanForm.controls;
  }

  edit() {
    this.benhNhan = this.benhNhanForm.value;
    this.benhNhanService.edit(this.benhNhan).subscribe(data => {
      alert('Sửa thành công');
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
  compareWith(o1: BenhAn, o2: BenhAn): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
