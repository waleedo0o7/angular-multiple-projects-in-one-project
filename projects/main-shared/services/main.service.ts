import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  projectName = 'Test Project';

  getTodos(){
    let url = "https://jsonplaceholder.typicode.com/comments?postId=1";
    return this.http.get(url)
  }

}
