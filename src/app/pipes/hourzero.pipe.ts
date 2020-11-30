import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourzero'
})
export class HourzeroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return ((value < 10 ? '0' : '') + value.toString());
  }

}
