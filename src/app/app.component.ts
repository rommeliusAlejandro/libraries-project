import { Component } from '@angular/core';
import {MenuItem} from "ui-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libraries-project';

  menuItems: MenuItem[] = [];

  active!: string;

  constructor() {
    this.menuItems = [
      {
        path: '/path1',
        label: 'Path 1'
      },
      {
        path: '/path2',
        label: 'Path 2',
        query: {
          paramOne: 'paramOne'
        }
      }
    ]
  }

  handleMenuEvent(activeLabel: string) {
    this.active = activeLabel;
  }
}
