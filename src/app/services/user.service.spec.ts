import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserResponse } from '../types/User';
import { UserService } from './user.service';


describe('UserService', () => {

  let userService: UserService,
    httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService
      ]
    });

    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  afterEach(() => {
    httpTestingController.verify();
  });

  it("getUsers should return a list users", () => {
    let userResponse: UserResponse = {
      data: [
        {
          id: "1",
          first_name: "first",
          last_name: "last",
          email: "abc@jk.com",
          avatar: "url://to//image"
        }
      ]
    }

    userService.getUsers().subscribe(users => {
      expect(users.length).toBe(1);
    });
    const request = httpTestingController.expectOne(`${userService.url}`);
    request.flush(userResponse);


  });




});
