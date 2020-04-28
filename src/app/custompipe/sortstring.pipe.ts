import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortstring'
})
export class SortstringPipe implements PipeTransform {

  transform(value: string[], args?: string): unknown {
    console.log(value);
    console.log(args);
    if(args === 'asc'){
      return value.sort()
    }
    if(args === 'dsc'){
      return value.sort().reverse()
    }
    return value.sort()
  }

}
