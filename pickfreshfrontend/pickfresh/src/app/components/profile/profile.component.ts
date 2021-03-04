import { Component, OnInit } from '@angular/core';
import {
  SocialUser,
  SocialAuthService,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  sessionValue: string = '';
  userName: string = '';
  email: string = '';
  photo: string = '';
  constructor(public session: SessionStorageService, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('UserName');
    this.email = sessionStorage.getItem('EmailId');
    this.photo = sessionStorage.getItem('PhotoUrl');
    console.log(this.photo);

  }

  signOut(): void {
    this.authService.signOut();
    sessionStorage.clear();
  }
}
