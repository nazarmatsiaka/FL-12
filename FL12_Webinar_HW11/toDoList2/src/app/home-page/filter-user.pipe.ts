import {Pipe, PipeTransform} from '@angular/core';
import {userInterface} from "../users.service";

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: userInterface[], search: string): userInterface[] {
    if(!search) {
      return value;
    }

    return value.filter(user =>
      user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

}
