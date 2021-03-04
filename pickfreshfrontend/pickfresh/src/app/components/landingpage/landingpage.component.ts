import { Component, OnInit } from '@angular/core';
import {
  SocialUser,
  SocialAuthService,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {
  user: SocialUser;
  durationInSeconds = 2;
  panelOpenState = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @SessionStorage() sessionValue = `Hello ${+new Date()}`;

  constructor(private authService: SocialAuthService, public session: SessionStorageService,
              private router: Router, private snackBar: MatSnackBar) {}

  public container: HTMLElement;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.userLogged(this.user);
      console.log(this.user);
      sessionStorage.setItem('UserName', this.user.firstName);
      sessionStorage.setItem('EmailId', this.user.email);
      sessionStorage.setItem('PhotoUrl', this.user.photoUrl);
      sessionStorage.setItem('UserLoginDate', JSON.stringify(new Date()));
      console.log(sessionStorage.getItem('UserLoginDate'));
    });

    this.container = document.querySelector('.main');
    document
      .querySelector('.open-navbar-icon')
      .addEventListener('click', () => {
        this.container.classList.add('change');
      });

    document
      .querySelector('.close-navbar-icon')
      .addEventListener('click', () => {
        this.container.classList.remove('change');
      });
    const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];

    let i = 0;

    Array.from(
      (document.querySelectorAll('.nav-link') as unknown) as HTMLCollectionOf<HTMLElement>
    ).forEach((item) => {
      item.style.cssText = `background-color: ${colors[i++]}`;
    });

    Array.from(
      (document.querySelectorAll(
        '.navigation-button'
      ) as unknown) as HTMLCollectionOf<HTMLElement>
    ).forEach((item) => {
      item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change');
      };
    });
  }

/* Security Implementation */


  signIn(): any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  userLogged(user: SocialUser): any {
    if (user == null) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['home']);
    }
  }

  submitComment(): void {
    this.snackBar.open('Thanks for writing to us', 'We will get back to you soon..!', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
