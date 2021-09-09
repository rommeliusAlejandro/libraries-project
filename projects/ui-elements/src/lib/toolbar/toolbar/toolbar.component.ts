import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ToolBarStore} from "../tool-bar.store";
import {ToolbarItem} from "../../api/toolbar-item";

@Component({
  selector: 'lib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, AfterViewInit {

  @ViewChild('toolbarContainer', {read: ViewContainerRef})
  newsContainer!: ViewContainerRef;

  constructor(
    private readonly toolbarStore: ToolBarStore,
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    Object.keys(this.toolbarStore.store).map(item => {
      const component = this.toolbarStore.store[item];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory<ToolbarItem>(component);
      let componentReference = this.newsContainer.createComponent(componentFactory);
    })

  }

}
