import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PackResponseModel } from '../models/packResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  apiUrl = 'https://hardworder.herokuapp.com/api/';

  constructor(private httpClient: HttpClient) { }

  getPacks(): Observable<PackResponseModel> {
    return this.httpClient.get<PackResponseModel>(this.apiUrl + 'pack/getAllUsersPacks');
  }
}
