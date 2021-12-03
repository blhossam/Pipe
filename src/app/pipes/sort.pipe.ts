import { Pipe, PipeTransform } from '@angular/core';

export interface Person {
  firstName: string;
  lastName: string;
}
@Pipe({ name: 'sort' })
export class Sort implements PipeTransform {

  transform(value: any, arg: 'same' | 'backwords' = 'backwords') {

    return arg === 'same' ? value : value.split('').reverse().join('');
  }

}
