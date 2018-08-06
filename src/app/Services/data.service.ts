import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  latitude: any;
  longitude: any;
  constructor(public http:Http) { 
    this.latitude = '41';
    this.longitude = '-87';
  }

  getData(){
    return this.http.get('api.openweathermap.org/data/2.5/weather?lat='+this.latitude+'&lon='+this.longitude).pipe(map(res=>res.json()));
  }
  takeData(lat:any,long:any){
    this.latitude= lat;
    this.longitude=long;
  }
}
