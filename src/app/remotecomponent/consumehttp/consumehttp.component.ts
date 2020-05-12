import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RemoteService } from 'src/app/service/remote.service';

@Component({
  selector: 'cts-consumehttp',
  templateUrl: './consumehttp.component.html',
  styleUrls: ['./consumehttp.component.css']
})
export class ConsumehttpComponent implements OnInit {

  friends:any = null
  name: string = null
  location: string = null
  score:number=null
  newFriendFormStatus:boolean = false

  constructor(private remote:RemoteService) { }

  displayAddNewFriend(){
    this.newFriendFormStatus = this.newFriendFormStatus == false ? true: false
  }

  getAllFriends(){
    this.remote.getAllUsers().subscribe(success=>{
      console.log(success);
      this.friends = success
    }, error=>{
      console.log(error);
    })
  }

  ngOnInit(): void {
    this.getAllFriends()
    
  }

setNewFriend(friendform){
      console.log(friendform);
      this.remote.addNewFriend(friendform.value)
            .subscribe(response =>{
              console.log(response);
              this.name = ""
              this.location = ""
              this.score = 0
              this.getAllFriends()
            }, error=>{
              console.log(error);
            });
     
    }

    deleteFriend(friend){

      console.log(friend);
      this.remote.deleteFriendById(friend.id)
          .subscribe(response=>{
            console.log(response);
            this.getAllFriends()
          }, error=>{
            console.log(error);
          })

    }


}
