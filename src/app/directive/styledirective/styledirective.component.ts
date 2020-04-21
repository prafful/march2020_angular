import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-styledirective',
  templateUrl: './styledirective.component.html',
  styleUrls: ['./styledirective.component.css']
})
export class StyledirectiveComponent implements OnInit {

  status: number =14

  constructor() { }

  ngOnInit(): void {
  }

  getColor =()=>{
    if(this.status >= 5){
      return "green"
    }else{
      return "pink"
    }
  }


}
