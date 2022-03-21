import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../types/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // public users$ : Observable<User[]>;
  // public currentUser: User;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    // this.users$ = this.userService.getUsers();
  }

  public setCurrentUser(user:User){
    // console.log("methd clcked");
    // this.currentUser = user;
  }

}
