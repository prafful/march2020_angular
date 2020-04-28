import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'cts-localone',
  templateUrl: './localone.component.html',
  styleUrls: ['./localone.component.css']
})
export class LocaloneComponent implements OnInit {

  counter:number = 0

  constructor(private myService:UtilityService) { }

  ngOnInit(): void {
    console.log(this.myService.localPi);
    console.log(this.myService.series);
    console.log(this.myService.getSeries());
    console.log(this.myService.addToSeries(4))
    console.log(this.myService.addToSeries(5))
    console.log(this.myService.addToSeries(6))
    this.counter = this.myService.nextCounter

    setTimeout(()=>{
      this.myService.nextCounter = 80
      this.counter = this.myService.nextCounter
    }, 10000)

  }

}
