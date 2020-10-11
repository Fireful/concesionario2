export interface ICoche {
  id?: number;
  marca?: string;
  anio?: number;
  electrico?: boolean;
  precio?: number;
  venta_id?: number;
}

export class Coche implements ICoche {
  constructor(
    public id?: number,
    public marca?: string,
    public anio?: number,
    public electrico?: boolean,
    public precio?: number,
    public venta_id?: number
  ) {
    this.electrico = this.electrico || false;
  }
}
