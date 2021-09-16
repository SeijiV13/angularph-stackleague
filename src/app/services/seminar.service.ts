import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seminar } from '../models/seminar';
import { tap } from 'rxjs/operators';

const BASE_URL = "https://angularph-admin.herokuapp.com";
@Injectable({
  providedIn: 'root'
})
export class SeminarService {

  constructor(private http: HttpClient) { }

  getSeminars (): Observable<any> {
    return this.http.get(`${BASE_URL}/seminars`).pipe(
      tap((data: any) => {return data})
    )
  }
}
