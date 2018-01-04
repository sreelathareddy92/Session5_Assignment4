import { Component, OnInit } from '@angular/core';
// need to import ViewEncapsulation to use 'encapsulation' property
import { ViewEncapsulation } from "@angular/core"

/** applied all styles using ViewEncapsulation one-by-one
 * 
 * Emulated - All styles In no styles Out
 * Native - No styles In no styles Out
 * None - All styles Out
 * 
 */

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css'],
 // encapsulation: ViewEncapsulation.None,
   encapsulation: ViewEncapsulation.Native,
   //encapsulation: ViewEncapsulation.Emulated
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
