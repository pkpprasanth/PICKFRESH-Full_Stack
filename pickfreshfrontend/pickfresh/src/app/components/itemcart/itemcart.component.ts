import { Component, OnInit } from '@angular/core';
import { CartService } from './../../service/cart.service';
import { CartGetSet } from './../../model/cartGetSet';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { OrderService } from './../../service/order.service';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-itemcart',
  templateUrl: './itemcart.component.html',
  styleUrls: ['./itemcart.component.css']
})
export class ItemcartComponent implements OnInit {

  displayedColumns: string[] = ['orderId', 'orderProductName', 'orderQuantity', 'orderPrice', 'deleteOrder'];
  cart: CartGetSet[];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  userEmail: string = '';
  orderedDate: string = '';
  constructor(private cartService: CartService, private snackBar: MatSnackBar, public session: SessionStorageService,
              private orderService: OrderService) { }

  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem('EmailId');
    this.orderedDate = sessionStorage.getItem('UserLoginDate');

    this.getOrders(this.userEmail);
  }

  placeOrder(): void {
    this.snackBar.open('ORDER PLACED..', 'THANK YOU..!', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  getOrders(userEmail): void {
    this.orderService.getOrderDetailsByEmail(userEmail).subscribe((response) =>
      this.cart = response);
  }

  getTotalCost(): any {
    let totalcost = 0;
    this.cart.forEach(item => {
      totalcost = totalcost + (item.orderPrice * item.orderQuantity);
    });
    if (totalcost <= 200) {
      totalcost = totalcost + 40;
    }
    return totalcost;
    // return this.cart.map(t => t.orderPrice).reduce((acc, value) => acc + value, 0);
  }
  getDeliveryCost(): any {
    let deliverycost = this.getTotalCost();
    if (deliverycost > 200) {
      deliverycost = 0;
      return deliverycost;
    }
    return 40;
  }

  deleteOrder(id: number): void {
    this.cart.forEach(item => {
      if (item.orderId === id) {
        this.cartService.deleteOrder(id).subscribe();
        console.log('item with id : ' + id + ' removed');
        this.getOrders(this.userEmail);
      }
    });
  }
  updateQuantity(operation: string, orderId): any {
    if (operation === '-') {
      this.cart.forEach(item => {
        if (item.orderId === orderId) {
          if (item.orderQuantity > 1) {
            console.log('quantity decreased');
            item.orderQuantity = item.orderQuantity - 1;
            this.cartService.updateOrder(orderId, item).subscribe();
            console.log('Item Quantity updated successfully to DB');
            this.getTotalCost();
          } else if (item.orderQuantity === 1) {
            console.log('Item must be removed');
            this.cartService.deleteOrder(orderId).subscribe((response) => console.log(response));
            console.log('item removed');
            this.getOrders(this.userEmail);
            this.getTotalCost();
          }
        }
      });
    } else if (operation === '+') {
      this.cart.forEach(item => {
        if (item.orderId === orderId) {
          console.log('quantity increased');
          item.orderQuantity = item.orderQuantity + 1;
          this.cartService.updateOrder(orderId, item).subscribe();
          console.log('Item Quantity updated successfully to DB');
          this.getTotalCost();
        }
      });
    }
  }
}
