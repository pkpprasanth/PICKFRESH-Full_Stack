import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from './../../service/food.service';
import { Food } from './../../model/food';
import { CartService } from './../../service/cart.service';
import { SocialUser } from 'angularx-social-login';
import { CartGetSet } from './../../model/cartGetSet';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css'],
})
export class FooddetailsComponent implements OnInit {
  private id: number;
  food: Food;
  user: SocialUser;
  allData: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  userName = '';
  userEmail = '';
  loginDate = '';

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private router: Router,
    private cartService: CartService, private snackBar: MatSnackBar, public session: SessionStorageService) {}

  ngOnInit(): any {
    this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id');
      this.viewFoodDetails(this.id);
    });

    this.getLatestData();
  }

  viewFoodDetails(id: number): any {
    this.foodService
      .getFoodById(id)
      .subscribe((response) => (this.food = response));
  }

  viewNextFood(): any {
    this.id = this.id + 1;
    this.router.navigate(['/fooddetails', this.id]);
  }
  // food.foodName,food.foodCost,user.email,user.name
  addCart(foodName: string, foodCost: number): any {
    this.userName = sessionStorage.getItem('UserName');
    this.userEmail = sessionStorage.getItem('EmailId');
    this.loginDate = sessionStorage.getItem('UserLoginDate');

    const cartObject = new CartGetSet(0, foodCost, foodName, 1, '', this.userEmail, this.userName);
    this.cartService.createOrder(cartObject).subscribe(() => {
      this.getLatestData();
    });
    this.snackBar.open('Item Added..', 'View Cart', {
       duration: 2000,
       horizontalPosition: this.horizontalPosition,
       verticalPosition: this.verticalPosition,
     });
    /* this.router.navigate(['/cart']); */
  }
  getLatestData(): any {
    this.cartService
      .getAllOrders()
      .subscribe((response) => (this.allData = response));
  }
}
