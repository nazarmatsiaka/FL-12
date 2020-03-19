import {Component, Input} from '@angular/core';
import {userInterface, UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: userInterface;

  constructor(private usersService: UsersService,
              private _router: Router) { }

  deleteBtn() {
    this.usersService.delete(this.user.id);
  }

  redirectTo() {
    this._router.navigate(['users', this.user.id]);
  }
}
