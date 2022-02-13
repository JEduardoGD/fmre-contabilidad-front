import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacionRoutingModule } from './aplicacion-routing.module';
import { CapturaMovimientoComponent } from './captura-movimiento/captura-movimiento.component';


@NgModule({
  declarations: [
    CapturaMovimientoComponent
  ],
  imports: [
    CommonModule,
    AplicacionRoutingModule
  ]
})
export class AplicacionModule { }
