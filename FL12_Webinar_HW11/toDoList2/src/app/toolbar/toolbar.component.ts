import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private usersService: UsersService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  change(value: string): void {
    this.usersService.searchValue$.next(value);
  }

  redirectTo(): void {
    this._router.navigate(['users', 'new']);
  }

}
