import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(day: Date, format: string): string {
    if(day!=undefined && day.toString().length > 0){
      switch(format){
        case 'yyyy/MM/dd':
          return day.getFullYear().toString() + '/' + (day.getMonth() + 1).toString().padStart(2,'0') + '/' + day.getDate().toString().padStart(2,'0')
      }
    }
    else{
      return '';
    }
  }

}
