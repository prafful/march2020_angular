import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  score = 88

  constructor() { }

  ngOnInit(): void {
  }

  callMe = function(){
    console.log("callMe Called! with score: " + this.score );
    return "I am coming from function in class file!"
  }

  changeScore = function(){
    console.log("changeScore called!");
    this.score++ 
  }

}
