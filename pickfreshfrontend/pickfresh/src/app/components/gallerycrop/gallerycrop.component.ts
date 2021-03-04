import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CropService } from './../../service/crop.service';
import { Crop } from './../../model/crop';

@Component({
  selector: 'app-gallerycrop',
  templateUrl: './gallerycrop.component.html',
  styleUrls: ['./gallerycrop.component.css']
})
export class GallerycropComponent implements OnInit {
  allImages: Crop[];
  constructor(private cropService: CropService, private router: Router) { }

  ngOnInit(): void {
    this.getLatestImages();
  }

  // Subscribing to the data present in Service (Dependency Injection)
  getLatestImages(): any {
    this.cropService.getAllCrop().subscribe((response) =>
      this.allImages = response);

  }

  openDetails(id: number): any {
    this.router.navigate(['/cropdetails', id]);
    }

}
