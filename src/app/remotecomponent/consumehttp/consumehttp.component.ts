import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RemoteService } from 'src/app/service/remote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cts-consumehttp',
  templateUrl: './consumehttp.component.html',
  styleUrls: ['./consumehttp.component.css']
})
export class ConsumehttpComponent implements OnInit {

  response:any = []
  id: number = 0
  friends:any = null
  name: string = null
  location: string = null
  score:number=null
  newFriendFormStatus:boolean = false
  editFriendFormStatus: boolean = false

  constructor(private remote:RemoteService, private router: Router) { }

  displayAddNewFriend(){
    this.newFriendFormStatus = this.newFriendFormStatus == false ? true:false
  }

  displayEditFriend(friend){
    
    if(this.editFriendFormStatus == false){
      this.editFriendFormStatus = true
    }

    console.log("Edit friend with ID: " + friend.id);
    this.remote.getFriendById(friend.id).subscribe(response=>{
      console.log(response);
      this.name = response.name
      this.location = response.location
      this.score = response.score
      this.id = response.id
    }, error=>{
      console.log(error);
    })
  }

  editFriend(friend){
    console.log(friend.value);
    this.remote.updateFriendById(friend.value)
                .subscribe(response=>{
                  console.log(response);
                  this.name = null
                  this.location = null
                  this.score = null
                  this.id = null
                  this.editFriendFormStatus = false
                  this.getAllFriends()

                }, error=>{
                  console.log(error);
                })

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
              this.newFriendFormStatus = false
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


    openAddNewFriendComponentView(){
      this.router.navigate(["/addnewfriend"])
    }

    openEditFriendComponentView(friend){
      console.log(friend.id);
      this.router.navigate(["/editfriend", friend.id ])
    }

}
