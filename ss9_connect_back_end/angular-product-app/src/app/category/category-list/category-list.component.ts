import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categorys: Category[] = [];
  category: Category = {};

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categorys = data;
    }, error => {
    }, () => {
    })
  }


  deleteCategory(id: any) {
    if (id != null) {
      this.categoryService.deleteCategory(parseInt(id)).subscribe(data => {
        alert('Xóa thành công');
        this.ngOnInit();
      }, error => {
      }, () => {
      });
    }

  }
}
