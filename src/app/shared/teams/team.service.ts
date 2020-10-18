import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  url: string = 'http://localhost:3000/team';
  constructor(private http: HttpClient) { }

  createTeam(data: any): Observable<any> {
    const body = data
    return this.http.post(`${this.url}/newteam`, body)
  }
  // teamName: '',
  // tag: [this.tagSelected],
  // tagName: [this.plySelected],
  // startDate: this.startDate,
  // endDate: this.endDate,
  searApi(data: any): Observable<any> {
    let { tag, startMacth, endMacth } = data
    let sdate = new Date(startMacth).toISOString();
    let edate = new Date(endMacth).toISOString();
    const body = {
      lid: [...tag],
      rid: ["z2", "z3", "z5", "z6"],
      output: 10,
      from: sdate,
      to: edate
    }
    return this.http.post(`${this.url}/searchapi`, body);
  }

  getMyteam(): Observable<any> {
    return this.http.get(`${this.url}/myteam`);
  }
  getProfileteam(mid: string): Observable<any> {
    const body = { mid: mid }
    return this.http.post(`${this.url}/profile`, body);
  }
  // saveDate(api: any): Observable<any>{

  // }
}
