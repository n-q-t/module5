import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product:Product={id:1};
  products:Product[]=[];
  constructor(private productService:ProductService,private router:Router) {
    this.products=productService.getAll();
  }

  ngOnInit(): void {
  }

  deleteProduct(id: any) {
    this.productService.deleteById(parseInt(id));
    this.router.navigateByUrl("/product");
    alert("Xóa thành công");
  }
}
