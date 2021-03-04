import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from './../../service/food.service';
import { Food } from './../../model/food';

@Component({
  selector: 'app-galleryfood',
  templateUrl: './galleryfood.component.html',
  styleUrls: ['./galleryfood.component.css']
})
export class GalleryfoodComponent implements OnInit {
  allImages: Food[];
  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.getLatestImages();
  }

  // Subscribing to the data present in Service (Dependency Injection)
  getLatestImages(): any {
    this.foodService.getAllFood().subscribe((response) =>
      this.allImages = response);

  }

  openDetails(id: number): any {
    this.router.navigate(['/fooddetails', id]);
  }

}
