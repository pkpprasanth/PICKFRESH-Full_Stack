import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FooterfrontComponent } from './components/footerfront/footerfront.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GallerycropComponent } from './components/gallerycrop/gallerycrop.component';
import { GallerykitsComponent } from './components/gallerykits/gallerykits.component';
import { GalleryfoodComponent } from './components/galleryfood/galleryfood.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CropdetailsComponent } from './components/cropdetails/cropdetails.component';
import { KitsdetailsComponent } from './components/kitsdetails/kitsdetails.component';
import { FooddetailsComponent } from './components/fooddetails/fooddetails.component';
import { HomeComponent } from './components/home/home.component';
import { KitssliderComponent } from './components/kitsslider/kitsslider.component';
import { FoodsliderComponent } from './components/foodslider/foodslider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopnavbarComponent } from './components/shopnavbar/shopnavbar.component';
import { FruitsComponent } from './components/filtercrop/fruits/fruits.component';
import { VegetablesComponent } from './components/filtercrop/vegetables/vegetables.component';
import { SpicesComponent } from './components/filtercrop/spices/spices.component';
import { CerealsComponent } from './components/filtercrop/cereals/cereals.component';
import { PulsesComponent } from './components/filtercrop/pulses/pulses.component';
import { CropService } from './service/crop.service';
import { MatIconModule } from '@angular/material/icon';
import { KitsnavbarComponent } from './components/kitsnavbar/kitsnavbar.component';
import { FoodnavbarComponent } from './components/foodnavbar/foodnavbar.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { AngularWebStorageModule } from 'angular-web-storage';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ItemcartComponent } from './components/itemcart/itemcart.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NonvegfoodComponent } from './components/filtercrop/nonvegfood/nonvegfood.component';
import { VegfoodComponent } from './components/filtercrop/vegfood/vegfood.component';
import { NonvegkitsComponent } from './components/filtercrop/nonvegkits/nonvegkits.component';
import { VegkitsComponent } from './components/filtercrop/vegkits/vegkits.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    FooterfrontComponent,
    GallerycropComponent,
    GallerykitsComponent,
    GalleryfoodComponent,
    CropdetailsComponent,
    KitsdetailsComponent,
    FooddetailsComponent,
    HomeComponent,
    KitssliderComponent,
    FoodsliderComponent,
    NavbarComponent,
    ShopnavbarComponent,
    FruitsComponent,
    VegetablesComponent,
    SpicesComponent,
    CerealsComponent,
    PulsesComponent,
    KitsnavbarComponent,
    FoodnavbarComponent,
    ItemcartComponent,
    GalleryComponent,
    AboutusComponent,
    ProfileComponent,
    VegkitsComponent,
    NonvegkitsComponent,
    NonvegfoodComponent,
    VegfoodComponent,
    NonvegkitsComponent,
    VegkitsComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatExpansionModule,
    SocialLoginModule,
    AngularWebStorageModule,
    MatMenuModule,
    MatStepperModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTreeModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    NgbModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '956544880019-ldvjk56hklc2mrbm8on2t1ofmm2mpfce.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    CropService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
