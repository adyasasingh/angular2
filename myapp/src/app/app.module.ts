import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {  FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { SchoolComponent } from './school/school.component';
import { PotentialComponent } from './potential/potential.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SchoolComponent,
    PotentialComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
