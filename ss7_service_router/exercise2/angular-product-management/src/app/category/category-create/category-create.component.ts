import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category:Category={};
  categoryForm:FormGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
  })
  constructor(private categoryService:CategoryService,private router:Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.category=this.categoryForm.value;
    this.category.id=this.categoryService.getAll().length+1;
    this.categoryService.saveCategory(this.category);
    alert('Thêm thành công');
    this.router.navigateByUrl('/category');
    console.log(this.category);
  }
}
