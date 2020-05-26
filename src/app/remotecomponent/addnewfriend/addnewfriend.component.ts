import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/service/remote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cts-addnewfriend',
  templateUrl: './addnewfriend.component.html',
  styleUrls: ['./addnewfriend.component.css']
})
export class AddnewfriendComponent implements OnInit {

  name:string= null
  location: string = null
  score:number = null

  constructor(private remote: RemoteService, private router: Router) { }

  ngOnInit(): void {
  }

  setNewFriend(ff){
    console.log(ff.value);
    this.remote.addNewFriend(ff.value).subscribe(response =>{
      console.log(response);
      this.name = ""
      this.location = ""
      this.score = 0
     
  }, error=>{
      console.log(error);
    })
  }


  goBackSimon(){
    this.router.navigate(["/all/consumehttp"])
  }

}
