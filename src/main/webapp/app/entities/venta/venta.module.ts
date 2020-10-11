import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Concesionario2SharedModule } from 'app/shared/shared.module';
import { VentaComponent } from './venta.component';
import { VentaDetailComponent } from './venta-detail.component';
import { VentaUpdateComponent } from './venta-update.component';
import { VentaDeleteDialogComponent } from './venta-delete-dialog.component';
import { ventaRoute } from './venta.route';

@NgModule({
  imports: [Concesionario2SharedModule, RouterModule.forChild(ventaRoute)],
  declarations: [VentaComponent, VentaDetailComponent, VentaUpdateComponent, VentaDeleteDialogComponent],
  entryComponents: [VentaDeleteDialogComponent],
})
export class Concesionario2VentaModule {}
