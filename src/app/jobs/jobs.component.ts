import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from "@angular/forms";
import { MainService } from '../main.service';
import { Data, QueryTestModel } from '../data.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  
  QueryForm= new FormGroup({
    db_dtls: new FormControl(''),
    job_query: new FormControl('')
  });

  JobsForm= new FormGroup({
    job_name: new FormControl(''),
    job_template: new FormControl('')
  });
  job_dbDetails:Data[];
  queryTestData:QueryTestModel;
  columnNames:string[];
  querySearched:boolean = false;
  queryFound:boolean = false;
  constructor(private mainService: MainService) {
    this.mainService.loadDatabasesDetails().subscribe((value:Data[])=>{
      this.job_dbDetails = value;
    });
   }

  ngOnInit() {
  }

  checkQueryDetails(){
    this.queryTestData ={
      dbName:this.QueryForm.value.db_dtls,
      queryString:this.QueryForm.value.job_query
    }

    this.mainService.validateQuery(this.queryTestData).subscribe((col:string[])=>{
      if(col.length == 0){
        this.queryFound = false;
      }else{
        this.columnNames = col;
        this.queryFound = true;
      }
      this.querySearched = true;
      console.log(this.columnNames);
    });
  }

  saveJobDetails(){

  }

}
