import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Pack } from '../models/pack';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  apiUrl = 'https://hardworder.herokuapp.com/api/';

  constructor(private httpClient: HttpClient) { }

  getPacks(): Observable<ListResponseModel<Pack>> {
    return this.httpClient.get<ListResponseModel<Pack>>(this.apiUrl + 'pack/getAllUsersPacks');
  }
}
