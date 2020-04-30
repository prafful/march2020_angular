import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getAllEmployees(){
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees")
  }


}
