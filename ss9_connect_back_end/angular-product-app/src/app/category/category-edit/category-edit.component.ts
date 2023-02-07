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
  categoryForm:FormGroup=new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });
  category:Category={};
  constructor(private categoryService:CategoryService,private router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data=>{
      const id=data.get('id');
      if (id!=null){
        this.categoryService.findById(parseInt(id)).subscribe(data=>{
          this.category=data;
          this.categoryForm.patchValue(this.category);
        })
      }
    },error => {},()=>{});
  }

  ngOnInit(): void {
  }

  editCategory() {
    this.category=this.categoryForm.value;
    this.categoryService.updateCategory(this.category).subscribe(data=>{
      this.router.navigateByUrl('/category');
      alert('Sửa thành công');
      console.log(this.category)
    },error => {},()=>{});
  }
}
