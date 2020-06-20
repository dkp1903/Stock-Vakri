import { TestBed } from '@angular/core/testing';

import { LiveMarketDataService } from './live-market-data.service';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

describe('LiveMarketDataService', () => {
  let service: LiveMarketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpModule,
        HttpClientModule
      ],
      providers:[
        LiveMarketDataService,
        
      ],
    });
    service = TestBed.inject(LiveMarketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
