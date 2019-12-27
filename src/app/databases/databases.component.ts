import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { MainService } from '../main.service';

export interface Result{
  value:string;
}
@Component({
  selector: 'app-databases',
  templateUrl: './databases.component.html',
  styleUrls: ['./databases.component.css']
})

export class DatabasesComponent implements OnInit {
  DatabaseForm= new FormGroup({
    db_dtls : new FormControl(''),
    db_name: new FormControl(''),
    db_user_name: new FormControl(''),
    db_pwd: new FormControl(''),
    db_hostname : new FormControl(''),
    db_port: new FormControl(''),
    db_ser : new FormControl(' '),
    db_sid: new FormControl(''),
  });  
  constructor(private mainService:MainService) { }

  ngOnInit() {
  }

  saveDBDetails(){
    this.mainService.saveDBDetails(this.DatabaseForm.value).subscribe((value:Result)=>{
      console.log("The result is "+value);
    });
  }

}
