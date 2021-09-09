import { Component, OnInit } from '@angular/core';
import {ToolbarItem} from "../../../projects/ui-elements/src/lib/api/toolbar-item";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, ToolbarItem {

  title: string = 'Editor';

  constructor() { }

  ngOnInit(): void {
  }

}
