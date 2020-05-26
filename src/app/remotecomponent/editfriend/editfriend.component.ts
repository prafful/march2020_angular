import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoteService } from 'src/app/service/remote.service';

@Component({
  selector: 'cts-editfriend',
  templateUrl: './editfriend.component.html',
  styleUrls: ['./editfriend.component.css']
})
export class EditfriendComponent implements OnInit {

  id: number = 0
  name: string = null
  location: string = null
  score:number=null

  friendid: any = 0

  constructor( private activeRoute: ActivatedRoute, private router: Router, private remote: RemoteService) { }

  ngOnInit(): void {
    console.log(this.activeRoute);
    console.log("Using Snapshot: " + this.activeRoute.snapshot.params.myid);
    console.log("Using Subscribe");
    this.activeRoute.params.subscribe(value =>{
      console.log(value);
      console.log(value.myid);
      this.friendid = value.myid
      this.remote.getFriendById(this.friendid).subscribe(response =>{
        console.log(response);
        this.id = response.id
        this.name = response.name
        this.location = response.location
        this.score = response.score
      }),
      error =>{
        console.log(error);
      }
    })

  }

  editFriend(){
    var updatedFriend = {
      id: this.id, 
      name: this.name, 
      location: this.location, 
      score: this.score
    }
    this.remote.updateFriendById(updatedFriend).subscribe(response =>{
      console.log(response);
      this.id = 0
      this.name = ""
      this.location = ""
      this.score = 0
      this.router.navigate(["/all/consumehttp"])
    }, error =>{
      console.log(error);
    })
  }

  goBackSimon(){
    this.router.navigate(["/all/consumehttp"])
  }


}
