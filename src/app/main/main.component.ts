import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NewserviceService } from '../newservice.service';
import { BasketComponent } from '../basket/basket.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
 
 


                                    ////get all method

  data:any
  cartItems:any[]=[]
constructor (private newService:NewserviceService){}
ngOnInit(){
  this.getAllproducts()///getaall
}

 ////get all method
 getAllproducts(){
  this.newService.fetch().subscribe(data1=>{
    console.log(this.data)
    this.data=data1
  })
 }



                                 ////get all method (end)
















                                     ///postmethod


additems(product:any):void{
  const quantity=1
  const price=product.price
  this.newService.addtocart(product.id,quantity,price).subscribe(resp=>{
    this.cartItems.push(product)
    console.log(product)
  })
}





                                 ///postmethod //// (end)




                                 ////delate method 






                                 /////delate method ///// (end)



                                 deleteItem(itemId: number) {
                                  this.newService.deleteItem(itemId).subscribe(
                                    () => console.log('Item deleted successfully'),
                                    error => console.error('Error deleting item', error)
                                  );
                                }
                              






                                    ///filter method


 loadFiltereedProducts(vegeterian:boolean,nuts:boolean){
  this.newService.getFilteredProducts(vegeterian,nuts).subscribe(data1=>{
    this.data=data1
  })
 }



applyfilter(vegeterian:boolean,nuts:boolean){
  if(vegeterian||nuts) {
    this.loadFiltereedProducts(vegeterian,nuts)

  }
  else {
    this.getAllproducts()
  }
  
  }



                                    ///filter method (end)


}
