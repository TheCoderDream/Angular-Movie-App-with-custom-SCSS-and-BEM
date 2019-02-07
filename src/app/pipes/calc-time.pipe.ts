import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcTime'
})
export class CalcTimePipe implements PipeTransform {

  transform(time: any): string {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
  }

}
