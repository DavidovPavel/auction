import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date, args?: any): string {
    if (value) {
      const oms = this._convertMS(new Date().valueOf() - value.valueOf());
      return `${oms.h} : ${oms.m} : ${oms.s}`;
    }
    return '';
  }

  _convertMS(ms) {
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return { d: d, h: h, m: m, s: s };
  }
}
