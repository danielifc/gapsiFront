import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CandidatoDataService {

  constructor(
    private http: HttpClient
  ) { }

  getWelcomeMessage(){
    return this.http.get<any>(`${API_URL}/candidato/welcome`);

  }

  getVersion(){
    return this.http.get<any>(`${API_URL}/candidato/version`);
  }

}
