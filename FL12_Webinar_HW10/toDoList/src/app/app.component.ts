import {Component, OnInit} from '@angular/core';
import {userInterface, UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  searchValue = '';
  users: userInterface[];
  addMode: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

  changeAddMode(mode: boolean) {
    this.addMode = mode;
  }
}
