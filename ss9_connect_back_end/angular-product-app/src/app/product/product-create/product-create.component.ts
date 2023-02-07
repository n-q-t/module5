import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../model/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categorys:Category[]=[];
  product:Product={};
  products:Product[]=[];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  })

  constructor(private productService: ProductService, private categoryService: CategoryService,private router:Router) {
    this.categoryService.getAll().subscribe(data => {
      this.categorys=data;
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  saveProduct() {
    this.product=this.productForm.value;
    this.productService.getAll().subscribe(data=>{
      this.product.id=data.length+1;
    })
    console.log(this.product.id);
    this.productService.saveProduct(this.product).subscribe(data=>{
      this.router.navigateByUrl('/product');
      alert('Thêm thành công');
    },error => {},()=>{});
  }
}
