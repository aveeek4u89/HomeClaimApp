import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HomeClaim } from '../model/home-claim';
import 'rxjs';
import {DatePipe} from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeClaimServiceService {
  public submitMessage:string="";
  homeClaim : HomeClaim;
  constructor(private http : HttpClient, public datePipe:DatePipe) { }

  addHomeClaim(formData: HomeClaim) :Observable<any>{ 
    //console.log(formData);
    formData.id = "JY"+Date.now();
    //console.log(formData);
    this.homeClaim = formData;
    return this.http.post('https://homeclaimapi.azurewebsites.net/api/HomeClaim/',formData);
  
  }
}
