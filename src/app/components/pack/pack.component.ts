import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pack } from 'src/app/models/pack';
import { PackResponseModel } from 'src/app/models/packResponseModel';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit {
  packs: Pack[] = [];
  apiUrl = 'https://hardworder.herokuapp.com/api/';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log("pack çalıştı");
    this.getPacks();
  }

  getPacks() {
    this.httpClient
    .get<PackResponseModel>(this.apiUrl + 'pack/getAllUsersPacks')
    .subscribe(response => { 
      this.packs = response.data;
    })
  }
}
