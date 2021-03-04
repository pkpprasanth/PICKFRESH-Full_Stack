import { Component, OnInit } from '@angular/core';
import { Crop } from './../../../model/crop';
import { CropService } from './../../../service/crop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pulses',
  templateUrl: './pulses.component.html',
  styleUrls: ['./pulses.component.css'],
})
export class PulsesComponent implements OnInit {
  allImages: Crop[];
  constructor(private cropService: CropService, private router: Router) {}

  ngOnInit(): void {
    this.getLatestImages();
  }

  // Subscribing to the data present in Service (Dependency Injection)
  getLatestImages(): any {
    this.cropService
      .getCropCategory('pulses')
      .subscribe((response) => (this.allImages = response));
  }

  openDetails(id: number): any {
    this.router.navigate(['/cropdetails', id]);
  }
}
