import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
// import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherDetails(cityName: string){
    return this.http.get(`${environment.baseUrl}/${cityName}`,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue)
    })
  }

  // getWeatherData(cityName: string): Observable<WeatherData>{
  //   return this.http.get<WeatherData>(environment.baseUrl, {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //     .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
      
  //     params: new HttpParams()
  //     .set('q', cityName)
  //     // .set('units','metric')
  //     // .set('mode','json')
  //   });
  // }
}
