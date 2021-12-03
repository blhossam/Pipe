import { Pipe, PipeTransform } from '@angular/core';

export interface Person {
  firstName: string;
  lastName: string;
}
@Pipe({ name: 'name' })
export class Name implements PipeTransform {

  transform(value: Person, arg?: boolean) {

    return arg ? `${value.lastName} ${value.firstName}` : `${value.firstName} ${value.lastName}`
  }
}
