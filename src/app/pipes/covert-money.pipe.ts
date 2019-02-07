import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'covertMoney'
})
export class CovertMoneyPipe implements PipeTransform {

  transform(money): any {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  }

}
