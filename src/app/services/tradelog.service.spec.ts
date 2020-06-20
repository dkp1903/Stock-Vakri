import { TestBed } from '@angular/core/testing';

import { TradelogService } from './tradelog.service';

import { HttpModule } from '@angular/http';


describe('TradelogService', () => {
  let service: TradelogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers:[
        TradelogService,
      ],
    });
    service = TestBed.inject(TradelogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
