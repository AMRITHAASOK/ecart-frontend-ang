import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

    allProducts:any=[]
    constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllProducts().subscribe((products:any)=>{
    this.allProducts=products;
    console.log(this.allProducts);//array of all products
    })
  }


}
