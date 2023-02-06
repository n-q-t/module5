import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category:Category | null={};
  categoryForm: FormGroup = new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
  });

  constructor(private categoryService:CategoryService,private router:Router,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data=>{
      const id=data.get('id');
      this.category=this.categoryService.findById(Number(id));
      if (this.category!=null){
        this.categoryForm.patchValue(this.category);
      }
    },error => {},()=>{});
  }

  submit() {
    this.category=this.categoryForm.value;
    this.categoryService.updateCategory(this.category);
    alert('Sửa thành công');
    this.router.navigateByUrl('/category');
  }
}
