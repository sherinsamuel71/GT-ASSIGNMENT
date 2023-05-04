import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OfferLayoutComponent } from './offer-layout/offer-layout.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';


@NgModule({
  declarations: [MainLayoutComponent,HeaderComponent,FooterComponent, OfferLayoutComponent, OfferDetailsComponent, MobileViewComponent, ProfileLayoutComponent],
  exports:[MainLayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
