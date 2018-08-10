import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../../Services/data.service";

@Component({
  selector: 'app-weatherwidget',
  templateUrl: './weatherwidget.component.html',
  styleUrls: ['./weatherwidget.component.css']
})
export class WeatherwidgetComponent implements OnInit {
  @Input() name:string;
  city:'';
  temp:number;
  weather:'';
  wind:'';
  deg:number;
  humidity:'';
  pressure:'';
  country='';
  imgsrc = '../../../assets//Images/4.png';
  weathermain = '';
  constructor(public dataService:DataService) { 
  }
  ngOnInit() {
    this.dataService.getData(this.name).subscribe(res=>
      {
        this.city = res.name;
        this.temp = parseFloat(res.main.temp) - 273.15;
        this.temp = parseFloat(this.temp.toFixed(2));
        this.humidity = res.main.humidity;
        this.pressure = res.main.pressure;
        this.weather = res.weather[0].description.toUpperCase();
        this.wind = res.wind.speed;
        this.country = res.sys.country;
        this.deg= res.wind.deg;
        if(this.deg)
        {
          
        this.deg = parseFloat(this.deg.toFixed(2));
        }
        this.weathermain = res.weather[0].main;
        switch(this.weathermain.toLowerCase()){
          case 'rain': this.imgsrc = '../../../assets//Images/5.png';
          break; 
          case 'clear': this.imgsrc = '../../../assets//Images/1.png';
          break;
          case 'clouds': this.imgsrc = '../../../assets//Images/7.png';
          break;
          case 'drizzle': this.imgsrc = '../../../assets//Images/3.png';
          break;
          case 'thunderstorm': this.imgsrc = '../../../assets//Images/9.png';
          break;
        }
      });
      
  }
  

}
