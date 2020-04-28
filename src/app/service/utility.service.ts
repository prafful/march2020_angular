import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  localPi = 3.14

  nextCounter = 10

  series = [1,2,3]

  getSeries(){
    return this.series
  }

  addToSeries(num){
    this.series.push(num)
    return this.series
  }

  constructor() { }
}
