import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HomeComponent } from './components/home/home.component';
import { GallerycropComponent } from './components/gallerycrop/gallerycrop.component';
import { CropdetailsComponent } from './components/cropdetails/cropdetails.component';
import { GallerykitsComponent } from './components/gallerykits/gallerykits.component';
import { KitsdetailsComponent } from './components/kitsdetails/kitsdetails.component';
import { GalleryfoodComponent } from './components/galleryfood/galleryfood.component';
import { FooddetailsComponent } from './components/fooddetails/fooddetails.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemcartComponent } from './components/itemcart/itemcart.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cropdetails/:id', component: CropdetailsComponent },
  { path: 'kitsdetails/:id', component: KitsdetailsComponent },
  { path: 'fooddetails/:id', component: FooddetailsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'gallerycrop', component: GallerycropComponent },
  { path: 'gallerykits', component: GallerykitsComponent },
  { path: 'galleryfood', component: GalleryfoodComponent },
  { path: 'cart', component: ItemcartComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
