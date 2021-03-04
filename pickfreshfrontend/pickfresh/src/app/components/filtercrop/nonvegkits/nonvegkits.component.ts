import { Component, OnInit } from '@angular/core';
import { KitsService } from './../../../service/kits.service';
import { Router } from '@angular/router';
import { Kits } from './../../../model/kits';

@Component({
  selector: 'app-nonvegkits',
  templateUrl: './nonvegkits.component.html',
  styleUrls: ['./nonvegkits.component.css']
})
export class NonvegkitsComponent implements OnInit {

  allImages: Kits[];
  constructor(private kitsService: KitsService, private router: Router) { }

  ngOnInit(): void {
    this.getLatestImages();
  }

  // Subscribing to the data present in Service (Dependency Injection)
  getLatestImages(): any {
    this.kitsService.getKitsByCategory('nonveg').subscribe((response) =>
      this.allImages = response);

  }

  openDetails(id: number): any {
    this.router.navigate(['/kitsdetails', id]);
  }


}
