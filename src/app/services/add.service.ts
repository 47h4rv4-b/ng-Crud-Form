import { Injectable } from '@angular/core';
import { Form } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  Api : Form=new Form();


  ApiDataStore: Array<Form>= new Array<Form>();/**add service ,routing, delete button*/
  Add(){
    this.ApiDataStore.push(this.Api);  /**first add the Api data */
    this.Api= new Form(); /**Then clear old i/ps */
  
}}
