import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {

  uri = 'http://localhost:3000/team/insert'

  constructor(private http:HttpClient) { }

  insertTeam(name:string, email:string): Observable<any>{
    const body = {
      name: name,
      email: email
    };
    return this.http.post(this.uri,body);
  }

}
