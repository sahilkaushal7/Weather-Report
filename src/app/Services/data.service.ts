import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http:Http) { 
  }

  getData(city:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9d423c487c42fbe05558947de6674aea').pipe(map(res=>res.json()));
  }
}
