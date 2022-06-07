import { Injectable } from '@angular/core';
import { Form } from '../app.model';

import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  Api: Form = new Form();

  base_uri = "http://localhost:8080/";



  constructor(private httpCLient: HttpClient) {


  }

  resultArray: any = [];
  ApiDataStore: Array<Form> = new Array<Form>();/**add service ,routing, delete button*/
  Add(data: Form) {
    this.ApiDataStore.push(data);  /**first add the Api data */
    this.Api = new Form(); /**Then clear old i/ps */

    let backend = {
      title: data.Apiname,
      body: data.Apiurl,
    }


    // console.log(data);
    // console.log(this.ApiDataStore)
    this.httpCLient.post(this.base_uri + "post", backend).subscribe((callback) => {/**MPPPPPP :Subscribe method useful to see data in*/
      console.log(callback)});


    // })


    // var newResult= this.httpCLient
    //   .post(this.base_uri + "post", backend)
    //   .pipe(
    //     map((data) => {
    //       console.log("add called")
    //       return this.getData()
    //       // return data;
    //     })
    //   );




    // this.resultArray.push(newResult);
    // return newResult;

  }



  delete(id: string) {

    this.httpCLient.delete(this.base_uri + "delete/" + id).subscribe((callback) => {
      console.log(callback);
    });


  }

  
  getData() {
    return this.httpCLient.get(this.base_uri + "post");
    
  }



  //   console.log(callback);





}
  // getData(){
  //   return this.ApiDataStore;
  // }

