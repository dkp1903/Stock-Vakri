import { TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';

import { ClientService } from './client.service';

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers:[
        AuthService
      ],
    });
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
