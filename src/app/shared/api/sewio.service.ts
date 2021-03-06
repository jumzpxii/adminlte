import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SewioService {

  url: string = 'http://localhost:3000/api';
  header: any = { 'X-ApiKey': '171555a8fe71148a165392904' };
  constructor(private http: HttpClient) { }

  distanAPI(data: any): Observable<any> {
    let { tag, startMacth, endMacth } = data
    let sdate = new Date(startMacth).toISOString();
    let edate = new Date(endMacth).toISOString();
    const body = {
      lid: [tag],
      output: 6,
      rid: [],
      from: sdate,
      to: edate
    }
    return this.http.post(`${this.url}/distan`, body, { headers: this.header });
  }
  zoneAPI(data: any): Observable<any> {
    let { tag, startMacth, endMacth } = data
    let sdate = new Date(startMacth).toISOString();
    let edate = new Date(endMacth).toISOString();
    const body = {
      lid: [tag],
      rid: ["z2", "z3", "z5", "z6"],
      output: 10,
      from: sdate,
      to: edate
    }
    return this.http.post(`${this.url}/zone`, body, { headers: this.header });
  }
  speedAPI(data: any): Observable<any> {
    let { tag, startMacth, endMacth } = data
    let sdate = new Date(startMacth).toISOString();
    let edate = new Date(endMacth).toISOString();
    const body = {
      lid: [tag],
      output: 3,
      rid: [],
      from: sdate,
      to: edate
    }
    return this.http.post(`${this.url}/speed`, body, { headers: this.header });
  }
}
