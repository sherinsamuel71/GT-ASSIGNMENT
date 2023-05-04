import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { HomePageModule } from './features/home-page/home-page.module';
import { HomePageComponent } from './features/home-page/home-page.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
   exports:[SharedModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // core, shared & layout
    SharedModule,
    LayoutModule,
    HomePageModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
