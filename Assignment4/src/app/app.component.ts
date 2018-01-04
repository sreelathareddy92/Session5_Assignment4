import { Component } from '@angular/core';
import { ViewEncapsulation } from "@angular/core"

// called newely created component 'new-component' selector 'app-new-component' as template 
@Component({
  selector: 'app-root',
  template: '<app-new-component></app-new-component>',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//@class AppComponent
export class AppComponent {
  title = 'app';
}
