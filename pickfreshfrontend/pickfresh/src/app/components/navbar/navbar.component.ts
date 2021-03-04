import { Component, OnInit } from '@angular/core';
import { SessionStorageService, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  photo: string = '';
  constructor(public session: SessionStorageService) {}

  ngOnInit(): void {
    this.photo = sessionStorage.getItem('PhotoUrl');
  }

}
