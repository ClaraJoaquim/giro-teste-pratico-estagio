import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FinanceService {

  private apiUrl = "https://api.hgbrasil.com/finance?format=json-cors&key=49f0fd13";

  constructor(
    private http:HttpClient,
  ) { }

  getDados(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
  
}
