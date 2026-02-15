import { Component } from '@angular/core';
import { Users } from '../../services/users';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [ AsyncPipe],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  users$: Observable<any>;

  constructor(private usersService: Users) {
    this.users$ = this.usersService.getUsers();
  }


}
