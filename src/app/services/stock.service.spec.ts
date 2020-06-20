import { TestBed } from '@angular/core/testing';

import { StockService } from './stock.service';

import { HttpClientModule } from '@angular/common/http';


describe('StockService', () => {
  let service: StockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // HttpModule,
        HttpClientModule
      ],
     
    });
    // service = TestBed.inject(StockService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
