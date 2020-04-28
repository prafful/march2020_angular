import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'cts-localtwo',
  templateUrl: './localtwo.component.html',
  styleUrls: ['./localtwo.component.css']
})
export class LocaltwoComponent implements OnInit {

  counter:number = 0

  constructor(private utility: UtilityService) { }

  ngOnInit(): void {
    console.log(this.utility.series);
    console.log(this.utility.addToSeries(8));
    this.counter = this.utility.nextCounter
  }

}
