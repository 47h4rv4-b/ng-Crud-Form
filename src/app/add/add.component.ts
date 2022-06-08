import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../app.model';
import { AddService } from '../services/add.service';
import { DataShare } from '../services/data-share.service';

import {Location} from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit {

  Api : Form=new Form();
  notification_msg="";

  constructor(public add: AddService, private DataShare: DataShare,private _location: Location ){ 
  
  }


  func() {

    // this.add.Add(this.Api).subscribe((callback)=>{
    //   console.log(callback);
    // });
    console.log("hiiiiii")
    this.add.Add(this.Api);                             //Douche missing this lineeee!!!!
    this.Api = new Form();
    // this.DataShare.sendData('NOTIFICATION:API ADDED!!');
    this.notification_msg="NOTIFICATION:API ADDED!!";

    setTimeout(()=>{

      this._location.back();
      this.notification_msg=""


    },1000);



  }
  ngOnInit(): void {
  }

  
}
