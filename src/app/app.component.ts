import { Component } from '@angular/core';
import {Api} from './app.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.view.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-form';
  Api : Api=new Api();

  ApiDataStore: Array<Api>= new Array<Api>();
  Add(){
    this.ApiDataStore.push(this.Api);  /**first add the Api data */
    this.Api= new Api(); /**Then clear old i/ps */

  }
}
