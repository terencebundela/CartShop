import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public products: any = [];
  public grandTotal!: number;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cart.getTotalPrice();
    });
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.total = item.price * item.quantity;
      this.cart.productList.next([...this.cart.cartItemList]);
    }
  }
  
  increaseQuantity(item: any) {
    item.quantity++;
    item.total = item.price * item.quantity;
    this.cart.productList.next([...this.cart.cartItemList]);
  }
  

  removeItem(item: any) {
    this.cart.removeCartItem(item);
  }

  emptyCart() {
    this.cart.emptyCart();
  }
}
