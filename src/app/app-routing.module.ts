import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Path1Component} from "./path1/path1.component";
import {Path2Component} from "./path2/path2.component";

const routes: Routes = [
  {path: 'path1', component: Path1Component},
  {path: 'path2', component: Path2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
