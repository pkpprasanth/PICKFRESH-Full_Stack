import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KitsService } from './../../service/kits.service';
import { Kits } from './../../model/kits';

@Component({
  selector: 'app-gallerykits',
  templateUrl: './gallerykits.component.html',
  styleUrls: ['./gallerykits.component.css']
})
export class GallerykitsComponent implements OnInit {
  allImages: Kits[];
  constructor(private kitsService: KitsService, private router: Router) { }

  ngOnInit(): void {
    this.getLatestImages();
  }

  // Subscribing to the data present in Service (Dependency Injection)
  getLatestImages(): any {
    this.kitsService.getAllKits().subscribe((response) =>
      this.allImages = response);

  }

  openDetails(id: number): any {
    this.router.navigate(['/kitsdetails', id]);
  }

}
