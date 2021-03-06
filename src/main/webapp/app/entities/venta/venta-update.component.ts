import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IVenta, Venta } from 'app/shared/model/venta.model';
import { VentaService } from './venta.service';
import { ICoche } from 'app/shared/model/coche.model';
import { CocheService } from 'app/entities/coche/coche.service';
import { ICliente } from 'app/shared/model/cliente.model';
import { ClienteService } from 'app/entities/cliente/cliente.service';
import { IVendedor } from 'app/shared/model/vendedor.model';
import { VendedorService } from 'app/entities/vendedor/vendedor.service';

type SelectableEntity = ICoche | ICliente | IVendedor;

@Component({
  selector: 'jhi-venta-update',
  templateUrl: './venta-update.component.html',
})
export class VentaUpdateComponent implements OnInit {
  isSaving = false;
  coches: ICoche[] = [];
  clientes: ICliente[] = [];
  vendedors: IVendedor[] = [];

  editForm = this.fb.group({
    id: [],
    fecha: [],
    importeTotal: [],
    coche: [],
    cliente: [],
    vendedor: [],
  });

  constructor(
    protected ventaService: VentaService,
    protected cocheService: CocheService,
    protected clienteService: ClienteService,
    protected vendedorService: VendedorService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ venta }) => {
      if (!venta.id) {
        const today = moment().startOf('day');
        venta.fecha = today;
      }

      this.updateForm(venta);

      this.cocheService
        .query({ filter: 'venta-is-null' })
        .pipe(
          map((res: HttpResponse<ICoche[]>) => {
            return res.body || [];
          })
        )
        .subscribe((resBody: ICoche[]) => {
          if (!venta.coche || !venta.coche.id) {
            this.coches = resBody;
          } else {
            this.cocheService
              .find(venta.coche.id)
              .pipe(
                map((subRes: HttpResponse<ICoche>) => {
                  return subRes.body ? [subRes.body].concat(resBody) : resBody;
                })
              )
              .subscribe((concatRes: ICoche[]) => (this.coches = concatRes));
          }
        });

      this.clienteService.query().subscribe((res: HttpResponse<ICliente[]>) => (this.clientes = res.body || []));

      this.vendedorService.query().subscribe((res: HttpResponse<IVendedor[]>) => (this.vendedors = res.body || []));
    });
  }

  updateForm(venta: IVenta): void {
    this.editForm.patchValue({
      id: venta.id,
      fecha: venta.fecha ? venta.fecha.format(DATE_TIME_FORMAT) : null,
      importeTotal: venta.importeTotal,
      coche: venta.coche,
      cliente: venta.cliente,
      vendedor: venta.vendedor,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const venta = this.createFromForm();
    if (venta.id !== undefined) {
      this.subscribeToSaveResponse(this.ventaService.update(venta));
    } else {
      this.subscribeToSaveResponse(this.ventaService.create(venta));
    }
  }

  private createFromForm(): IVenta {
    return {
      ...new Venta(),
      id: this.editForm.get(['id'])!.value,
      fecha: this.editForm.get(['fecha'])!.value ? moment(this.editForm.get(['fecha'])!.value, DATE_TIME_FORMAT) : undefined,
      importeTotal: this.editForm.get(['importeTotal'])!.value,
      coche: this.editForm.get(['coche'])!.value,
      cliente: this.editForm.get(['cliente'])!.value,
      vendedor: this.editForm.get(['vendedor'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IVenta>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
