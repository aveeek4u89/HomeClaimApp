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
  constructor(private http : HttpClient, public datePipe:DatePipe) { }

  addHomeClaim(formData: HomeClaim) :Observable<any>{ 
    //console.log(formData);
    formData.id = "JY"+formData.policyNumber+Date.now();
    //console.log(formData);
    return this.http.post('http://localhost:55776/api/HomeClaim/',formData);
  }
}
