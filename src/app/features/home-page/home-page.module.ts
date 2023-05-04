import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LayoutModule
  ]
})
export class HomePageModule { }
