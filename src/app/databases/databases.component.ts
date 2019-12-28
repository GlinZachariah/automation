import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { MainService } from '../main.service';
import { Result,Data } from "../data.model";
import { TouchSequence } from 'selenium-webdriver';

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
  db_Saved:boolean;
  db_Validated:boolean =false;
  db_searchResult:Data[];
  db_searched:boolean=false;
  db_searchEmpty:boolean = true;
  constructor(private mainService:MainService) { }

  ngOnInit() {
  }

  saveDBDetails(){
    this.mainService.saveDBDetails(this.DatabaseForm.value).subscribe((value:Result)=>{
      // console.log("The result is "+value);
      if(value.value == "Working"){
        this.db_Saved=true;
      }else{
        this.db_Saved=false;
      }
      this.db_Validated =true;
    });
  }

  searchDBDetails(search){
    this.mainService.searchDBDetails(search).subscribe((val:Data[])=>{
        this.db_searched = true;
        if(val.length == 0){
          this.db_searchEmpty = true;
        }else{
          this.db_searchEmpty = false;
          this.db_searchResult = val;
        }
    });
  }

  patchDBDetails(index){
    this.db_searched=false;
    this.DatabaseForm.patchValue({
      db_dtls : this.db_searchResult[index].db_dtls,
    db_name:this.db_searchResult[index].db_name,
    db_user_name:this.db_searchResult[index].db_user_name,
    db_pwd:this.db_searchResult[index].db_pwd,
    db_hostname :this.db_searchResult[index].db_hostname,
    db_port:this.db_searchResult[index].db_port,
    db_ser : this.db_searchResult[index].db_ser,
    db_sid:this.db_searchResult[index].db_sid
    });
  }

}
