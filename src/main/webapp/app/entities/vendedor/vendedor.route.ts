import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IVendedor, Vendedor } from 'app/shared/model/vendedor.model';
import { VendedorService } from './vendedor.service';
import { VendedorComponent } from './vendedor.component';
import { VendedorDetailComponent } from './vendedor-detail.component';
import { VendedorUpdateComponent } from './vendedor-update.component';

@Injectable({ providedIn: 'root' })
export class VendedorResolve implements Resolve<IVendedor> {
  constructor(private service: VendedorService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IVendedor> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((vendedor: HttpResponse<Vendedor>) => {
          if (vendedor.body) {
            return of(vendedor.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Vendedor());
  }
}

export const vendedorRoute: Routes = [
  {
    path: '',
    component: VendedorComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'concesionario2App.vendedor.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: VendedorDetailComponent,
    resolve: {
      vendedor: VendedorResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'concesionario2App.vendedor.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: VendedorUpdateComponent,
    resolve: {
      vendedor: VendedorResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'concesionario2App.vendedor.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: VendedorUpdateComponent,
    resolve: {
      vendedor: VendedorResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'concesionario2App.vendedor.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
