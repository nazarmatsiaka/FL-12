import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {userInterface, UsersService} from "../users.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  param: string = this.activitedRouter.snapshot.params.userId;
  user: userInterface;
  userForm: FormGroup;
  title: string;

  constructor(private activitedRouter: ActivatedRoute,
              private usersService: UsersService,
              private _router: Router) {}

  ngOnInit(): void {
    this.discardForm();
    if(this.param === 'new') {
      this.title = 'New User';
    } else {
      this.title = 'Edit';
      this.usersService.getUserById(+this.param)
        .subscribe(
          (res) => {
            this.user = res;
            this.setForm();
          },
          (err) => {
            this._router.navigate(['']);
            console.log(err);
          });
    }
  }

  setForm(): void {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.user.phone, Validators.required),
      address: new FormControl(this.user.address.street),
      website: new FormControl(this.user.website)
    });
  }

  discardForm(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      address: new FormControl(''),
      website: new FormControl('')
    });
  }

  submit(): void {
    let newUser = {
      name: this.userForm.value.name,
      phone: this.userForm.value.phone,
      address: {street: this.userForm.value.address},
      website: this.userForm.value.website,
      email: this.userForm.value.email
    }
    if(this.param === 'new') {
      this.usersService.addUser({id: this.usersService.idForNewUser, ...newUser})
        .subscribe(
          () => this._router.navigate(['']),
          err => console.log(err)
        );
    } else {
      this.usersService.editUser({id: this.user.id, ...newUser})
        .subscribe(
          () => this._router.navigate(['']),
          (err) => console.log(err)
        );
    }
  }

  redirectTo(): void {
    this._router.navigate(['']);
  }
}
