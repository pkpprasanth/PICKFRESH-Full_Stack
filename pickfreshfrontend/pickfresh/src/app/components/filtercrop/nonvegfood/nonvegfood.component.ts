import { Component, OnInit } from '@angular/core';
import { Food } from './../../../model/food';
import { FoodService } from './../../../service/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nonvegfood',
  templateUrl: './nonvegfood.component.html',
  styleUrls: ['./nonvegfood.component.css']
})
export class NonvegfoodComponent implements OnInit {

  allImages: Food[];
  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.getLatestImages();
  }

  // Subscribing to the data present in Service (Dependency Injection)
  getLatestImages(): any {
    this.foodService.getFoodByCategory('nonveg').subscribe((response) =>
      this.allImages = response);

  }

  openDetails(id: number): any {
    this.router.navigate(['/fooddetails', id]);
  }


}
