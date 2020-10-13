import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerRoute: string = 'http://localhost:3000/player'

  constructor(private http: HttpClient) { }

  getPlayer(): Observable<any> {
    return this.http.get(`${this.playerRoute}/get`);
  }

  register(value: any): Observable<any> {
    const body = value
    return this.http.post(`${this.playerRoute}/register`, body)
  }
  delPlayer(id: any): Observable<any> {
    return this.http.delete(`${this.playerRoute}/del/${id}`)
  }
}
