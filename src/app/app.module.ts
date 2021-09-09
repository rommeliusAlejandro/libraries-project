import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuModule, ToolbarModule} from "ui-elements";
import { Path1Component } from './path1/path1.component';
import { Path2Component } from './path2/path2.component';
import { NotepadComponent } from './notepad/notepad.component';
import { EditorComponent } from './editor/editor.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    Path1Component,
    Path2Component,
    NotepadComponent,
    EditorComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule.forRoot({
      branding: 'Digital Harbor',
      host: 'Localhost',
      copyright: 'DH'
    }),
    ToolbarModule.forRoot({
      store: {
        'notepad': NotepadComponent,
        'editor': EditorComponent,
        'calculator': CalculatorComponent
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
