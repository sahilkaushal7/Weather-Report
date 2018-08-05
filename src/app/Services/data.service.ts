import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) { }

  getData(){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9d423c487c42fbe05558947de6674aea').pipe(map(res=>res.json()));
  }
}
