import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import {NgPipesModule} from 'ngx-pipes';
import { Pratice1Component } from './pratice1/pratice1.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5TComponent } from './lesson5-t/lesson5-t.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { HightlightDirective } from './hightlight.directive';
import { Lesson61Component } from './lesson6-1/lesson6-1.component';
import { AppRoutingModule } from './app-routing.module';
import { DyclassComponent } from './dyclass/dyclass.component';
import { Jq1Component } from './jq1/jq1.component';
import { Lesson7Component } from './lesson7/lesson7.component';
import { BmiService } from './bmi.service';
import { CallhttpComponent } from './callhttp/callhttp.component';
import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';
import { NgModelDrivenComponent } from './ng-model-driven/ng-model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Pratice1Component,
    Lesson4Component,
    Lesson5TComponent,
    Lesson5Component,
    InputButtonComponent,
    Lesson6Component,
    HightlightDirective,
    Lesson61Component,
    DyclassComponent,
    Jq1Component,
    Lesson7Component,
    CallhttpComponent,
    NgModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule,  //other writing;
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BmiService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
