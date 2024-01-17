import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{

    product:any={}
    constructor(private route:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    //get an id of particular product
    this.route.params.subscribe((res:any)=>{
      console.log(res);//{id:2}
      const {id}=res
      console.log(id);//2
      this.viewAproduct(id)
    }) 
  }
  ////get the details of the product -api call
    viewAproduct(id:any){
      this.api.viewproduct(id).subscribe((item:any)=>{
        console.log(item);// {product details }
        this.product=item
        console.log(this.product);//{product details }
        
      })
    }

    addToWishlist(product:any){
      
       if(sessionStorage.getItem('token')){
        this.api.addToWishlist(product).subscribe({
          next:(item:any)=>{
            console.log(item);
  
            alert("Product added successfully")
        },
        error:(err)=>{
          alert(err.error)
        }
      })
         }
      else{
        alert("Operation denied")
      }
    }

}
