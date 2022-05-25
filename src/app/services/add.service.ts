import { Injectable } from '@angular/core';
import { Form } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  Api : Form=new Form();


  ApiDataStore: Array<Form>= new Array<Form>();/**add service ,routing, delete button*/
  Add(data:Form){
    this.ApiDataStore.push(data);  /**first add the Api data */
    this.Api= new Form(); /**Then clear old i/ps */
    // console.log(data);
    // console.log(this.ApiDataStore)
  
}
  getData(){
    return this.ApiDataStore;
  }


}
