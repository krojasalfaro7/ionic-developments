import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienestarVegetalPage } from './bienestar-vegetal.page';

const routes: Routes = [
  {
    path: '',
    component: BienestarVegetalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienestarVegetalPageRoutingModule {}
