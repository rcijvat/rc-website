import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef: ViewContainerRef) {
    // We need this small hack in order to catch application root view container ref for the ng2-bootstrap modal to work
    // See https://github.com/angular/angular/issues/6446#issuecomment-173459525 for more info
    this.viewContainerRef = viewContainerRef;
  }
}
