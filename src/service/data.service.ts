import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from 'src/app/model/country';
import { Case } from 'src/app/model/case';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }

  getUserIpAddress(): Observable<any> {
    return this.http.get<any>('https://jsonip.com');
  }

  getUserCountry(ip: string): Observable<any> {
    return this.http.get<any>(`http://ip-api.com/json/${ip}`);
  }

  getCoronavirusCases(countryCode: string): Observable<any>{
    return this.http.get<any>(`https://api.thevirustracker.com/free-api?countryTimeline=${countryCode}`)
  } 

}
