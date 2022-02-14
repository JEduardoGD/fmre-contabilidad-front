import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacionRoutingModule } from './aplicacion-routing.module';
import { CapturaMovimientoComponent } from './captura-movimiento/captura-movimiento.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CapturaMovimientoComponent
  ],
  imports: [
    CommonModule,
    AplicacionRoutingModule,
    FormsModule
  ]
})
export class AplicacionModule { }
