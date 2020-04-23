import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  friends:string[] = ['obb','mlann', 'owioh','OBB', 'bnp','BNP']

  scores:number[]=[88,8,7,4,88,500,444,2]

  constructor() { }

  ngOnInit(): void {
  }

}
