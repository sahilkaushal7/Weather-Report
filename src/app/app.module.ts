import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FormsModule }        from '@angular/forms';

import { AppComponent } from './app.component';
import { MainSectionComponent } from './Components/main-section/main-section.component';
import { DataService } from './Services/data.service';
import { HeaderComponent } from './Components/header/header.component';
import { FormComponent } from './Components/form/form.component';
import { WeatherwidgetComponent } from './Components/weatherwidget/weatherwidget.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    HeaderComponent,
    FormComponent,
    WeatherwidgetComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    GooglePlaceModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
