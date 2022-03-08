import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, UserResponse } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private url = "https://reqres.in/api/users?page=1";

  getUsers():Observable<User[]> {
    return this.http.get<UserResponse>(this.url)
      .pipe(
        map( response=> response.data )
      );
  }

}
