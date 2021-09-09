import { Component, OnInit } from '@angular/core';
import {ToolbarItem} from "../../../projects/ui-elements/src/lib/api/toolbar-item";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit, ToolbarItem {

  title: string = 'Calculator';

  constructor() { }

  ngOnInit(): void {
  }

}
