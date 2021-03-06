import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Concesionario2SharedModule } from 'app/shared/shared.module';
import { VendedorComponent } from './vendedor.component';
import { VendedorDetailComponent } from './vendedor-detail.component';
import { VendedorUpdateComponent } from './vendedor-update.component';
import { VendedorDeleteDialogComponent } from './vendedor-delete-dialog.component';
import { vendedorRoute } from './vendedor.route';

@NgModule({
  imports: [Concesionario2SharedModule, RouterModule.forChild(vendedorRoute)],
  declarations: [VendedorComponent, VendedorDetailComponent, VendedorUpdateComponent, VendedorDeleteDialogComponent],
  entryComponents: [VendedorDeleteDialogComponent],
})
export class Concesionario2VendedorModule {}
