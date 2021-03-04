import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CropService } from './../../service/crop.service';
import { Crop } from './../../model/crop';
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
  selector: 'app-cropdetails',
  templateUrl: './cropdetails.component.html',
  styleUrls: ['./cropdetails.component.css']
})
export class CropdetailsComponent implements OnInit {

  private id: number;
  crop: Crop;
  user: SocialUser;
  allData: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  userName = '';
  userEmail = '';
  loginDate = '';
  constructor(private route: ActivatedRoute, private cropService: CropService, private router: Router,
              private cartService: CartService, private snackBar: MatSnackBar, public session: SessionStorageService) { }

  ngOnInit(): any {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.viewCropDetails(this.id);
    }
    );
  }

  viewCropDetails(id: number): any {
    this.cropService.getCropById(id).subscribe((response) =>
      this.crop = response);
  }

  viewNextCrop(): any{
    this.id = this.id + 1;
    this.router.navigate(['/cropdetails', this.id]);
  }


  addCart(foodName: string, foodCost: number): any {
    this.userName = sessionStorage.getItem('UserName');
    this.userEmail = sessionStorage.getItem('EmailId');
    /* this.loginDate = sessionStorage.getItem('UserLoginDate'); */

    const cartObject = new CartGetSet(0, foodCost, foodName, 1, '', this.userEmail , this.userName);
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


