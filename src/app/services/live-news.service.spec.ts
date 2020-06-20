import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { LiveNewsService } from './live-news.service';

describe('LiveNewsService', () => {
  let service: LiveNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers:[
        LiveNewsService
      ],
    });
    service = TestBed.inject(LiveNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
