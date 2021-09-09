import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {RouterModule} from "@angular/router";
import {ConfigService} from "../config/config.service";



@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainMenuComponent
  ]
})
export class MenuModule {

  static forRoot(configService: ConfigService) {
    return {
      ngModule: MenuModule,
      providers: [
        {provide: ConfigService, useValue: configService}
      ]
    }
  }

}
