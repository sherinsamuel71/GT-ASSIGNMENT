import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./features/home-page/home-page.module').then(m => m.HomePageModule)
      }
    ]
  },
  {
    path: '**', redirectTo: '404' ,

  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
