import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserResponse } from '../types/User';
import { UserService } from './user.service';


describe('UserService', () => {
  let service: UserService;
  let httpClientMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService
      ]
    });
    service = TestBed.inject(UserService);
    httpClientMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpClientMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUsers method should return list of users', () => {
    const mockResponse: UserResponse = {
      data: [
        {
          id: '1',
          first_name: 'John',
          last_name: 'Doe',
          email: 'johnDoe@aol.com',
          avatar: 'imgnx:do.pgs'
        }
      ]
    }

    service.getUsers().subscribe(users => {
      expect(users.length).toBe(1);
      expect(users).toEqual(mockResponse.data);
    });


    const req = httpClientMock.expectOne(`${service.url}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse.data);

  });
});
