import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {

  uri = 'http://localhost:3000/team'

  constructor(private http:HttpClient) { }

  insertTeam(name:string, email:string): Observable<any>{
    const body = {
      name: name,
      email: email
    };
    return this.http.post(`${this.uri}/insert`,body);
  }

  getTag(tag:Array<string>):Observable<any>{
    const body = [...tag];
    return this.http.post(`${this.uri}/gettags`,body)
  }

  insertTags(tag:any){
    const body = tag
    return this.http.post(`${this.uri}/addtags`,body)
  }

}
