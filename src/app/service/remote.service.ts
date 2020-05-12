import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get("http://localhost:3000/allfriends")
  }

  addNewFriend(friend){
    return this.http.post("http://localhost:3000/allfriends", friend)
  }

  deleteFriendById(id){
    return this.http.delete("http://localhost:3000/allfriends" + "/" + id)
  }


}
