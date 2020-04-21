import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-ifdirective',
  templateUrl: './ifdirective.component.html',
  styleUrls: ['./ifdirective.component.css']
})
export class IfdirectiveComponent implements OnInit {

  display: boolean = true
  displayElse:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay =()=>{
    this.display = this.display==true ? false:true
    console.log(this.display);
  }


  toggleDisplayElse =()=>{
    this.displayElse = this.displayElse==true ? false:true
    console.log(this.displayElse);
  }
}
