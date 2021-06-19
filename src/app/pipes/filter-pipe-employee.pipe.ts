import { Employee } from './../models/employee';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipeEmployee',
})
export class FilterPipeEmployeePipe implements PipeTransform {
  transform(value: Employee[], filterText: string): Employee[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (e: Employee) =>
            e.firstName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
