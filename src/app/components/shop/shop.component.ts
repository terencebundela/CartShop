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

  database: Products[] = [];

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
      console.log(response);
      this.database = response;

      this.database.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  addtocart(products: any) {
    this.cart.addToCart(products);
  }

  getProductDescription(id: number) {
    this.fakeStore.getProductById(id).subscribe((response) => {
      console.log(response);
      this.products = response;
    });
  }
}
