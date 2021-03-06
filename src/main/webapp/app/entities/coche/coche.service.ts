import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ICoche } from 'app/shared/model/coche.model';

type EntityResponseType = HttpResponse<ICoche>;
type EntityArrayResponseType = HttpResponse<ICoche[]>;

@Injectable({ providedIn: 'root' })
export class CocheService {
  public resourceUrl = SERVER_API_URL + 'api/coches';

  constructor(protected http: HttpClient) {}

  create(coche: ICoche): Observable<EntityResponseType> {
    return this.http.post<ICoche>(this.resourceUrl, coche, { observe: 'response' });
  }

  update(coche: ICoche): Observable<EntityResponseType> {
    return this.http.put<ICoche>(this.resourceUrl, coche, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ICoche>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ICoche[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
