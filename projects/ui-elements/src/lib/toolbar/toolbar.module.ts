import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {ToolBarStore} from "./tool-bar.store";



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule {

  static forRoot(toolBarStore: ToolBarStore) {
    return {
      ngModule: ToolbarModule,
      providers: [
        {provide: ToolBarStore, useValue: toolBarStore}
      ]
    }
  }

}
