import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar2Component } from './navbar2.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpModule } from '@angular/http';
// import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


describe('Navbar2Component', () => {
  let component: Navbar2Component;
  let fixture: ComponentFixture<Navbar2Component>;
  let service: AuthService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule.withRoutes([]),
        // FlashMessagesModule.forRoot()
      ],
      providers:[
        AuthService
      ],
      declarations: [ Navbar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

//   it('should create', () => {
//     service = TestBed.inject(AuthService);
//     expect(component).toBeTruthy();
//   });
});
