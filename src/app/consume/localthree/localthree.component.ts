import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'cts-localthree',
  templateUrl: './localthree.component.html',
  styleUrls: ['./localthree.component.css']
})
export class LocalthreeComponent implements OnInit {

  counter: number = 0 
  constructor(private service:UtilityService) { }

  ngOnInit(): void {
    this.counter = this.service.nextCounter
    setTimeout(()=>{
      this.service.nextCounter = 40
      this.counter = this.service.nextCounter
    }, 4000)

  }

}
