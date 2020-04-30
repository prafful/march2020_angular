import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RemoteService } from 'src/app/service/remote.service';

@Component({
  selector: 'cts-consumehttp',
  templateUrl: './consumehttp.component.html',
  styleUrls: ['./consumehttp.component.css']
})
export class ConsumehttpComponent implements OnInit {

  users:any = null
  employeees: any = null

  constructor(private remote:RemoteService) { }

  ngOnInit(): void {

    this.remote.getAllUsers().subscribe(success=>{
      console.log(success);
      this.users = success
    }, error=>{
      console.log(error);
    })

    this.remote.getAllEmployees().subscribe(success=>{
      console.log(success);
      this.employeees = success.data
    }, error=>{
      console.log(error);
    })

  }




}
