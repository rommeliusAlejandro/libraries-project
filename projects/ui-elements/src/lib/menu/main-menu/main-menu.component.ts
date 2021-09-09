import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from "../../api/menu-item";
import {ConfigService} from "../../config/config.service";

@Component({
  selector: 'lib-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Input()
  menuItems: MenuItem[] = [];

  menuBranding!: string;

  @Output()
  activeElementEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly configService: ConfigService
  ) {

    this.configService = this.configService;

  }

  ngOnInit(): void {
  }

  emitActive(label: string) {
    this.activeElementEmitter.emit(label)
  }

}
