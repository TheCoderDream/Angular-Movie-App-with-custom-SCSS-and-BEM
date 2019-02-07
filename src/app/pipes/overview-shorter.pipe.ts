import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'overviewShorter'
})
export class OverviewShorterPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length <= 291) {
      return value;
    }

    return value.slice(0, 288) + '...';
  }

}
