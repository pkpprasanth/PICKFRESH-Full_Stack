import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KitsService } from './../../service/kits.service';
import { Kits } from './../../model/kits';
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
  selector: 'app-kitsdetails',
  templateUrl: './kitsdetails.component.html',
  styleUrls: ['./kitsdetails.component.css']
})
export class KitsdetailsComponent implements OnInit {

  private id: number;
  kits: Kits;
  user: SocialUser;
  allData: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  userName = '';
  userEmail = '';
  loginDate = '';

  constructor(private route: ActivatedRoute, private kitsService: KitsService, private router: Router,
              private cartService: CartService, private snackBar: MatSnackBar, public session: SessionStorageService) { }

  ngOnInit(): any {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.viewKitsDetails(this.id);
    }
    );
  }

  viewKitsDetails(id: number): any {
    this.kitsService.getKitById(id).subscribe((response) =>
      this.kits = response);
  }

  viewNextKit(): any {
    this.id = this.id + 1;
    this.router.navigate(['/kitsdetails', this.id]);
  }

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
