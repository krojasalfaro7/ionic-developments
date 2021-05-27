import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bienestar',
    loadChildren: () => import('./pages/bienestar/bienestar.module').then( m => m.BienestarPageModule)
  },
  {
    path: 'bienestar-vegetal',
    loadChildren: () => import('./pages/bienestar-vegetal/bienestar-vegetal.module').then( m => m.BienestarVegetalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
