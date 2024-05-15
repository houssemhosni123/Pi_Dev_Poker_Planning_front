import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: any, format: string = 'yyyy-MM-dd'): any {
    if (!value) return null;
    
    const datePipe: DatePipe = new DatePipe('en-US');
    return datePipe.transform(value, format);
  }
}
