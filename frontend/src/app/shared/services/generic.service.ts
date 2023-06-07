import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {RequestUtil} from "../utils/request-util";
import {Page} from "../models/page.model";

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  httpClient: HttpClient;
  entity: string;
  resourceURL: string;

  protected constructor(httpClient: HttpClient, entity: string) {
    this.httpClient = httpClient;
    this.entity = entity;
    this.resourceURL = environment.serviceURL + environment.apiUrl + '/' + this.entity;
  }

  public findById<T>(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.resourceURL}/${id}`, {params: RequestUtil.setStandardParams()})
  }

  public findAll<T>(event: any): Observable<Page<T>> {
    let param = RequestUtil.getParamsFromLazyLoadEvent(event);
    return this.httpClient.get<Page<T>>(this.resourceURL, {params: RequestUtil.setStandardParams(param)})
  }

  public findAllList<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.resourceURL}/list`, {params: RequestUtil.setStandardParams()})
  }

  public create<T>(model: T): Observable<T> {
    return this.httpClient.post<T>(this.resourceURL, model, {params: RequestUtil.setStandardParams()})
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.resourceURL}/${id}`, {params: RequestUtil.setStandardParams()})
  }

  public update<T>(model: T): Observable<T> {
    return this.httpClient.put<T>(this.resourceURL, model, {params: RequestUtil.setStandardParams()});
  }
}
