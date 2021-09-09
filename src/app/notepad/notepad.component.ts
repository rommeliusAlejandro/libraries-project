import { Component, OnInit } from '@angular/core';
import {ToolbarItem} from "../../../projects/ui-elements/src/lib/api/toolbar-item";

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit, ToolbarItem {

  title: string = 'NotePad';

  constructor() { }

  ngOnInit(): void {
  }

}
