import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Concesionario2SharedModule } from 'app/shared/shared.module';
import { CocheComponent } from './coche.component';
import { CocheDetailComponent } from './coche-detail.component';
import { CocheUpdateComponent } from './coche-update.component';
import { CocheDeleteDialogComponent } from './coche-delete-dialog.component';
import { cocheRoute } from './coche.route';

@NgModule({
  imports: [Concesionario2SharedModule, RouterModule.forChild(cocheRoute)],
  declarations: [CocheComponent, CocheDetailComponent, CocheUpdateComponent, CocheDeleteDialogComponent],
  entryComponents: [CocheDeleteDialogComponent],
})
export class Concesionario2CocheModule {}
