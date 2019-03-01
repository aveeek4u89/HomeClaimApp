import { Component, OnInit } from '@angular/core';
import { HomeClaimServiceService } from 'src/app/service/home-claim-service.service';
import { HomeClaim } from '../model/home-claim';
import {  MatSort, MatTableDataSource, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-claimdetailcomponent',
  templateUrl: './claimdetailcomponent.component.html',
  styleUrls: ['./claimdetailcomponent.component.css']
})
export class ClaimdetailcomponentComponent implements OnInit {

  constructor(public homeclaimservice:HomeClaimServiceService, public dialogRef: MatDialogRef<ClaimdetailcomponentComponent>) { }
  homeClaim : HomeClaim;
  ngOnInit() {

    this.homeClaim =  this.homeclaimservice.homeClaim;
  }
  onClose(): void {
    this.dialogRef.close();
  }
}
