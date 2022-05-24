import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../app.model';
import { AddService } from '../services/add.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  Api : Form=new Form();

  constructor(public add: AddService) { 
    

    

  
  }
  
  func(){
    this.add.Add(this.Api)


  }
  ngOnInit(): void {
  }

  
}
