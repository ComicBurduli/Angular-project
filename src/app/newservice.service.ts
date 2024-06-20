import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewserviceService {


private getallproductsUrl = "https://restaurant.stepprojects.ge/api/Products/GetAll"
private  filterproudctsUrl ='https://restaurant.stepprojects.ge/api/Products/GetFiltered'
private  addBasketUlr = 'https://restaurant.stepprojects.ge/api/Baskets/AddToBasket'
private basketAll = 'https://restaurant.stepprojects.ge/api/Baskets/GetAll'
private delateUlr = 'https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct'
///get all product (products get method)
  constructor(private http:HttpClient) { }
  fetch():Observable<any[]>{
    return this.http.get<any[]>(this.getallproductsUrl)
  }



  ///filtermethod (prouductsfilter method)
getFilteredProducts(vegeterian:Boolean,nuts:boolean):Observable<any[]>{
  const url=`${this.filterproudctsUrl}?vegeterian=${vegeterian}${nuts}`
  return this.http.get<any[]>(url)
}


////post method 
 

addtocart(quantity:number,price:number,productId:number):Observable<any>{
  const body = {quantity,price,productId}
  return this.http.post<any>(this.addBasketUlr,body)
  
}



////post method 



////basket get method 

basketallmethod():Observable<any[]>{
  return this.http.get<any[]>(this.basketAll)
}



////basket get method





///delatemethod


deleteItem(postid: number): Observable<any> {
  return this.http.delete(`${this.delateUlr}/items/${postid}`);
}


///delatemethod






}
