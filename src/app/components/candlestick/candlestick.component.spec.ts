import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CandlestickComponent } from './candlestick.component';
import { HttpClientModule } from '@angular/common/http';// import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

describe('CandlestickComponent', () => {
  let component: CandlestickComponent;
  let fixture: ComponentFixture<CandlestickComponent>;
  // let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule
      ],
      // providers:[
      //   Router
      // ],
      declarations: [ CandlestickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlestickComponent);
    component = fixture.componentInstance;
    // router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});