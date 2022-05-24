import { Component } from '@angular/core';
import {Form} from './app.model'
import { AddService } from './services/add.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.view.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-form';
  Api : Form=new Form();

  

  Add(){
     this.addService.Add(this.Api);  /**first add the Api data */
    this.Api= new Form(); /**Then clear old i/ps */

  }
//   deleteRow(d: Form){
//     const index = this.ApiDataStore.indexOf(d);
//     this.ApiDataStore.splice(index, 1);
// }

  constructor(public addService : AddService){

    

  }
}
