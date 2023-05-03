import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5050/api/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl + 'appuser').pipe(
      map((response: any) => {

      })
    )
  }
}
