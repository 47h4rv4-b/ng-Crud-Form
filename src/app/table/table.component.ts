import { Component, OnInit } from '@angular/core';
import { AddService } from '../services/add.service';
import { Form } from '../app.model';
import { DataShare } from '../services/data-share.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Api : Form=new Form();
  array: any = [];
  subscription: Subscription | undefined;
  constructor(public addService : AddService, private DataShare: DataShare) { 

 

  


  }
  deleteRow(data: any){
    // const index = this.addService.getData().indexOf(data);
    // this.addService.getData().splice(index, 1);
    console.log("1234567")
    this.addService.delete(data._id);
    this.ngOnInit();                  //***IMPPP : not calling {jo code currently ngOnInit madhe ahe}, inside constructor ...otherwise, have to refresh oage every time to get data {SPA not followed} */


  }

  
  ngOnInit(): void {
    this.subscription = this.addService.getData().subscribe((res:any) => {
      if (res) {
          console.log("tableCalled");
          this.array = res.posts;
          console.log(this.array);
      } else {
          this.array = [];
      }
  });
  }


    


}
