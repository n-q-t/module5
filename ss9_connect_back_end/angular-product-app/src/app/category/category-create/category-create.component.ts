import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {};
  categorys:Category[]=[];
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  })

  constructor(private categoryService: CategoryService, private router: Router) {
    this.categoryService.getAll().subscribe(data=>{
      this.categorys=data;
    },error => {},()=>{})
  }

  ngOnInit(): void {
  }

  saveCategory() {
    this.category = this.categoryForm.value;
    this.category.id = this.categorys.length + 1;
    this.categoryService.saveCategory(this.category).subscribe(data=>{
      this.router.navigateByUrl('/category');
      alert('Thêm thành công');
    },error => {},()=>{});
  }

}
