import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-classdirective',
  templateUrl: './classdirective.component.html',
  styleUrls: ['./classdirective.component.css']
})
export class ClassdirectiveComponent implements OnInit {

  status: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleClass =()=>{
    this.status = this.status==true ? false:true
    console.log(this.status);
  }

}
