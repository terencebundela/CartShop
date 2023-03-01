import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  username: any;

  // database: Login[] = [];

  public totalItem : number | undefined;

  constructor (private cart: CartService) {}

  ngOnInit() {
   this.cart.getProducts().subscribe(res => {
    if(res.length > 0) {
      this.totalItem = res.length;
    } else {
      this.totalItem = undefined;
    }
    
   })
  }
 
}
