import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categorys: Category[] = [];
  category:Category={};

  constructor(private categoryService: CategoryService,private router:Router) {
    this.categorys=this.categoryService.getAll();
  }

  ngOnInit(): void {
  }

  deleteCategory(id: any) {
    this.categoryService.deleteById(parseInt(id));
    this.router.navigateByUrl('/category');
    alert('Xóa thành công ');
  }
}
