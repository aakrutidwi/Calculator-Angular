import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


constructor(private http : HttpClient) { }

  private apiUrl = 'http://localhost:8080/BackEndService/calculator';

calculate(inputArray : any[]){
   console.log("In backend service",inputArray);
 this.http.post<any>(this.apiUrl,JSON.stringify(inputArray)).subscribe( data =>{
  console.log("resonse from backend service", data)
 });
}

  // calculate method
// post - url & InputArray json form
}
