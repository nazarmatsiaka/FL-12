import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {userInterface, UsersService} from "../users.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: userInterface = {
    id: NaN,
    name: '',
    email: '',
    phone: ''
  };
  @Output() changeAddMode = new EventEmitter<boolean>();

  editMode:boolean = false;
  userForm: FormGroup;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.user.phone, Validators.required)
    });

    if(!this.user.id) {
      this.editMode = true;
    }
  }

  submit() {
    let id = this.user.id || this.usersService.getNewId();
    this.usersService.addChange({id, ...this.userForm.value});
    if(!this.user.id) {
      this.changeAddMode.emit(false);
    }
  }

  editModeOn() {
    this.editMode = true;
  }

  discard() {
    if(this.user.id) {
      this.editMode = false;
    } else {
      this.changeAddMode.emit(false);
    }
  }

  deleteUser(id: number) {
    this.usersService.delete(id);
  }
}
