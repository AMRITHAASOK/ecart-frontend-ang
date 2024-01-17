import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl="http://localhost:3000"

  constructor(private http:HttpClient) { }

  //get all products from db
  getAllProducts(){
    return this.http.get(`${this.baseurl}/products/all-product`)
  }

  //register
  register(body:any){
    return this.http.post(`${this.baseurl}/user/register`,body)
  }
   //login
   login(body:any){
    return this.http.post(`${this.baseurl}/user/login`,body)
  }

  //view a product
  viewproduct(id:any){
    return this.http.get(`${this.baseurl}/products/view/${id}`)
  }

  appendTokenToHeaders(){
    let headers=new HttpHeaders()
    const token = sessionStorage.getItem("token")
    if(token){
      headers=headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }

  addToWishlist(product:any){
      return this.http.post(`${this.baseurl}/wishlist/add`,product,this.appendTokenToHeaders())
  }
}
