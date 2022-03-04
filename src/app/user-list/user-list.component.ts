import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: UserModel[] = [];
  public username: string = '';

  constructor() { }

  ngOnInit(): void {
    this.userList = [
      {
        name: 'Mario',
        isActive: true
      },
      {
        name: 'Jose',
        isActive: true
      },
      {
        name: 'Sara',
        isActive: false
      }
    ];
  }

  addUser(username: string): void {
    const user: UserModel = {
      name: username,
      isActive: false
    };
    this.userList.push(user);
  }

  toggleActiveUser(user: UserModel): void {
    user.isActive = !user.isActive;
  }

}
