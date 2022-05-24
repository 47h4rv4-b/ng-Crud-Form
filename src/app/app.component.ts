import { Component } from '@angular/core';
import {Form} from './app.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.view.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-form';
  Api : Form=new Form();

  ApiDataStore: Array<Form>= new Array<Form>();/**add service ,routing, delete button*/
  Add(){
    this.ApiDataStore.push(this.Api);  /**first add the Api data */
    this.Api= new Form(); /**Then clear old i/ps */

  }
  deleteRow(d: Form){
    const index = this.ApiDataStore.indexOf(d);
    this.ApiDataStore.splice(index, 1);
}
}
