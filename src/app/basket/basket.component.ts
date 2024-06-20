import { Component } from '@angular/core';
import { NewserviceService } from '../newservice.service';
import { OnInit } from '@angular/core';
import { error } from 'console';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {




 

  basket: any[] = [];
  constructor(private NewServiceService: NewserviceService) { }
///delateitem
  deleteItem(postid: number): void {
    this.NewServiceService.deleteItem(postid)
      .subscribe(
        () => {
          // Handle success, maybe show a success message
          console.log('Item deleted successfully');
        },
        error => {
          // Handle error, maybe show an error message
          console.error('Error deleting item:', error);
        }
      );
  }


///getall basket


ngOnInit() { // Correct spelling of ngOnInit
  console.log('ddddfsf')
  this.NewServiceService.basketallmethod().subscribe(data => {
    console.log(data)
    this.basket = data
    console.log(this.basket)
  })
}

///getall basket

}
