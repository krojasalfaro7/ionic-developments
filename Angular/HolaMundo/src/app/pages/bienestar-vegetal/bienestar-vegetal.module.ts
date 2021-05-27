import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienestarVegetalPageRoutingModule } from './bienestar-vegetal-routing.module';

import { BienestarVegetalPage } from './bienestar-vegetal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienestarVegetalPageRoutingModule
  ],
  declarations: [BienestarVegetalPage]
})
export class BienestarVegetalPageModule {}
