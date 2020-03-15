import { Pipe, PipeTransform } from '@angular/core';
import {userInterface} from "./users.service";

@Pipe({
  name: 'filterUsers',
  pure: false
})
export class FilterUsersPipe implements PipeTransform {

  transform(value: userInterface[], searchValue: string): userInterface[] {
    if(searchValue === '') {
      return value;
    }
    return value.filter(user =>
      user.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
  }

}
