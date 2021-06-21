import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { Databinding2Component } from './databinding2/databinding2.component';
import { Databinding3Component } from './databinding3/databinding3.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    Databinding2Component,
    Databinding3Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
