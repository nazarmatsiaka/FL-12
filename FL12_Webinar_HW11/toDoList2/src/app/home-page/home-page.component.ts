import { Component, OnInit } from '@angular/core';
import {userInterface, UsersService} from "../users.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  usersList: userInterface[];
  searchValue: string = '';

  constructor(private usersService: UsersService) { }


  ngOnInit(): void {
    this.usersService.searchValue$
      .subscribe((value: string) => {
        this.searchValue = value;
      });

    this.usersService.users$
      .subscribe(users => {
        this.usersList = users;
      });

    this.usersService.getUsers();
  }
}
