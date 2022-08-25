import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'csv'
})
export class CsvPipe implements PipeTransform {

  transform(value: any, ...propNames: string[]): string {
    let csvString = '';
    for (let p of propNames) {
      csvString += value[p] + ',';
    }
    csvString = csvString.slice(0, -1);   
    return csvString;
  }
}

