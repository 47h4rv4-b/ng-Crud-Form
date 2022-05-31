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
  data: any[] = [];
  subscription: Subscription | undefined;
  constructor(public addService : AddService, private DataShare: DataShare) { 

    this.subscription = this.DataShare.getData().subscribe(res => {
      if (res) {
          this.data.push(res);
      } else {
          this.data = [];
      }
  });


  }
  deleteRow(data: Form){
    const index = this.addService.getData().indexOf(data);
    this.addService.getData().splice(index, 1);


  }
  ngOnInit(): void {
  }

}
