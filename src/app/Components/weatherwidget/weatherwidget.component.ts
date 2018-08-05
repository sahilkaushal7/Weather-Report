import { Component, OnInit } from '@angular/core';
import { DataService } from "../../Services/data.service";

@Component({
  selector: 'app-weatherwidget',
  templateUrl: './weatherwidget.component.html',
  styleUrls: ['./weatherwidget.component.css']
})
export class WeatherwidgetComponent implements OnInit {
  city:'';
  temp:string;
  date:'';
  constructor(public dataService:DataService) { 
  }
  ngOnInit() {
    this.dataService.getData().subscribe(res=>
      {
        this.city = res.city.name;
        this.temp = (((res.list[0].main.temp)*5)/9).toFixed(1);
        this.date = res.list[0].dt_txt;
        console.log(res);
      });
  }

}
