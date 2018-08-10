import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  showDiv:boolean = true;
  value:string = 'Search Weather Of A City';
  constructor() { 
    
  }
  ngOnInit() {

  }
  public show(){
    this.showDiv = !this.showDiv;
    if(this.value === 'Search Weather Of A City'){
      this.value = 'Show Weather Of Popular Cities';
    }
    else if(this.value === 'Show Weather Of Popular Cities'){
      this.value = 'Search Weather Of A City';
    }
  }
  

}

