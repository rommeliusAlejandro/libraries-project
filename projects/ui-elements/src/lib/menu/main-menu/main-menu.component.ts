import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from "../../api/menu-item";

@Component({
  selector: 'lib-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Input()
  menuItems: MenuItem[] = [];

  @Output()
  activeElementEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitActive(label: string) {
    this.activeElementEmitter.emit(label)
  }

}
