import { Injectable } from '@angular/core';
import {ForkifyService} from "./forkify.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];

  constructor(private forkifyService: ForkifyService) {
  }

  addDish(id: string): void {
    this.forkifyService.getDetails(id)
      .subscribe(value => {
        this.cart.push(value)
        console.log("CART", this.cart);
      });
  }

  removeDish(id: string): void {
    if(this.cart.length){
      this.forkifyService.getDetails(id)
        .subscribe(value => {
          let index = this.cart.findIndex( dish => dish.recipe.recipe_id === id);
          this.cart.splice(index, 1);
          console.log("CART", this.cart);
        });
    }
  }
}


