import { Component } from '@angular/core';
import { FakeStoreService } from 'src/app/services/fake-store.service';
import { Products } from 'src/app/products';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  constructor(private fakeStore: FakeStoreService, private cart: CartService) {}

  // database: Products[] = [];
  public productList: any;

  products: any = [];

  id!: number;
  category!: string;
  description!: string;
  image!: string;
  price!: number;
  rating!: object;
  title!: string;

  ngOnInit() {
    this.fakeStore.getProducts().subscribe((response: any) => {
      // console.log(response);
      this.productList = response;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  // addtocart(products: any, event: any) {
  //   event.preventDefault();
  //   this.cart.addToCart(products);
  //   // window.alert('Your product has been added to the cart!');

  // }

  addtocart(product: any, event: any) {
    event.preventDefault();
    // Check if the product is already in the cart
    const index = this.cart.cartItemList.findIndex((item: any) => item.id === product.id);
  
    if (index > -1) {
      // If the product is already in the cart, increase the quantity
      this.cart.cartItemList[index].quantity += product.quantity;
      this.cart.cartItemList[index].total = this.cart.cartItemList[index].quantity * this.cart.cartItemList[index].price;
    } else {
      // If the product is not in the cart, add it
      this.cart.addToCart(product);
    }
  }
  
  

  getProductDescription(id: number) {
    this.fakeStore.getProductById(id).subscribe((response) => {
      console.log(response);
      this.products = response;
    });
  }
}
