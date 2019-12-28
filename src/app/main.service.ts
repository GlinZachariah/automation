import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  saveDBDetails(data){
    return this.http.post("/api/validate",data);
  }

  searchDBDetails(search){
    return this.http.get("/api/search/"+search);
  }

  loadDatabasesDetails(){
    return this.http.get('/api/jobs/getDatabases');
  }

  validateQuery(queryData){
    return this.http.post('/api/jobs/getColumnNames',queryData);
  }

  
}
