import { Injectable } from '@angular/core';
import {Category} from "../model/category";
import {Product} from "../model/product";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category:Category | null={};
  categorys:Category[]=[
    {id:1,name:'apple'},
    {id:2,name:'samsung'},
    {id:3,name:'oppo'},
  ]
  constructor() { }

  getAll(){
    return this.categorys;
  }

  findById(number:number):Category | null{
    let temp=this.categorys.filter(element=>element.id===number);
    if(temp.length==0){
      return null;
    }
    return temp[0];
  }

  saveCategory(category:Category){
    return this.categorys.push(category);
  }

  updateCategory(category:any){
    let length=this.categorys.length;
    for (let i = 0; i < length; i++) {
      if (category.id==this.categorys[i].id){
        this.categorys[i]=category;
        break;
      }
    }
  }

  deleteById(id:number){
    this.category=this.findById(id);
    let length=this.categorys.length;
    for (let i = 0; i < length; i++) {
      if(this.categorys[i].id==this.category?.id){
        this.categorys.splice(i,1);
        break;
      }
    }
  }
}


