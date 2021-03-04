import { Component, OnInit } from '@angular/core';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sessionValue: string = '';
  userName: string = '';
  email: string = '';
  photo: string = '';
  constructor(public session: SessionStorageService) { }


  ngOnInit(): void {
    this.userName = sessionStorage.getItem('UserName');
    this.email = sessionStorage.getItem('EmailId');
    this.photo = sessionStorage.getItem('PhotoUrl');
    console.log(this.photo);
  }

}
