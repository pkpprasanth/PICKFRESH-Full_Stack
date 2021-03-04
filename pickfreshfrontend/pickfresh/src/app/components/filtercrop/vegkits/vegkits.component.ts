import { Component, OnInit } from '@angular/core';
import { Kits } from './../../../model/kits';
import { KitsService } from './../../../service/kits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegkits',
  templateUrl: './vegkits.component.html',
  styleUrls: ['./vegkits.component.css']
})
export class VegkitsComponent implements OnInit {

  allImages: Kits[];
  constructor(private kitsService: KitsService, private router: Router) { }

  ngOnInit(): void {
    this.getLatestImages();
  }

  // Subscribing to the data present in Service (Dependency Injection)
  getLatestImages(): any {
    this.kitsService.getKitsByCategory('veg').subscribe((response) =>
      this.allImages = response);

  }

  openDetails(id: number): any {
    this.router.navigate(['/kitsdetails', id]);
  }


}
