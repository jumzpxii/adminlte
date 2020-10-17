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

  searApi(data: any): Observable<any> {
    let { tag, startDate, endDate } = data
    let sdate = new Date(startDate).toISOString();
    let edate = new Date(endDate).toISOString();
    const body = {
      lid: [...tag],
      rid: ["z2", "z3", "z5", "z6"],
      output: 10,
      from: sdate,
      to: edate
    }
    return this.http.post(`${this.url}/searchapi`, body);
  }

  // saveDate(api: any): Observable<any>{

  // }
}
