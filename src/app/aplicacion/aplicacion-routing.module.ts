import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapturaMovimientoComponent } from './captura-movimiento/captura-movimiento.component';

const routes: Routes = [
  {path: '', component: CapturaMovimientoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacionRoutingModule { }
