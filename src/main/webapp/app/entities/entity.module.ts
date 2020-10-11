import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'coche',
        loadChildren: () => import('./coche/coche.module').then(m => m.Concesionario2CocheModule),
      },
      {
        path: 'vendedor',
        loadChildren: () => import('./vendedor/vendedor.module').then(m => m.Concesionario2VendedorModule),
      },
      {
        path: 'venta',
        loadChildren: () => import('./venta/venta.module').then(m => m.Concesionario2VentaModule),
      },
      {
        path: 'cliente',
        loadChildren: () => import('./cliente/cliente.module').then(m => m.Concesionario2ClienteModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class Concesionario2EntityModule {}
