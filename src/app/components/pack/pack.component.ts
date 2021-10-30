import { Component, OnInit } from '@angular/core';
import { Pack } from 'src/app/models/pack';
import { PackResponseModel } from 'src/app/models/packResponseModel';
import { PackService } from 'src/app/services/pack.service';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit {
  packs: Pack[] = [];

  constructor(private packService: PackService) { }

  ngOnInit(): void {
    console.log("pack çalıştı");
    this.getPacks();
  }

  getPacks() {
    this.packService.getPacks().subscribe(response => {
      this.packs = response.data;
    })
  }

}
