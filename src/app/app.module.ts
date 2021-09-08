import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuModule} from "ui-elements";
import { Path1Component } from './path1/path1.component';
import { Path2Component } from './path2/path2.component';

@NgModule({
  declarations: [
    AppComponent,
    Path1Component,
    Path2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
