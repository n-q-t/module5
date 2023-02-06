import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product:Product={};
  productForm:FormGroup;
  products:Product[]=this.productService.getAll();
  constructor(private productService:ProductService,private router:Router) {
    this.productForm=new FormGroup({
      id:new FormControl(),
      name:new FormControl(),
      price:new FormControl(),
      description:new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.product=this.productForm.value;
    this.product.id=this.products.length+1;
    this.productService.saveProduct(this.product);
    this.router.navigateByUrl("");
    alert("Thêm thành công");
    console.log(this.product);
  }
}
