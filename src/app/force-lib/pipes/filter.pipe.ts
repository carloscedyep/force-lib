import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], params: string[], values: string[]): any[] {
    var newArray: any[] = [];

    if (values) {
      if (values.length > 0) {
        if (values.length == 1 && values[0] == '') {
          return array;
        } else {
          for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < params.length; j++) {
              newArray = newArray.concat(
                array.filter((a) =>
                  a[params[j]]
                    .toString()
                    .trim()
                    .toUpperCase()
                    .includes(values[i].toString().toUpperCase())
                )
              );
            }
          }
          return newArray;
        }
      } else {
        return array;
      }
    } else {
      return array;
    }
  }
}
