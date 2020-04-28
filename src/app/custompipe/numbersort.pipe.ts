import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersort'
})
export class NumbersortPipe implements PipeTransform {

  transform(value: number[], args?: string): unknown {

    if(args === "asc"){
      return value.sort( function(a, b){
        return a-b
      })
    }

    if(args == "dsc"){
      return value.sort( function(a, b){
        return b-a
      })
    }

    return value.sort( function(a, b){
      return a-b
    })
   
  }

}
