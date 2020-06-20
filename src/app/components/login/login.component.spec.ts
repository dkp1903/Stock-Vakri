import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule.withRoutes([]),
        FlashMessagesModule.forRoot()
      ],
      providers:[
        AuthService
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    service = TestBed.inject(AuthService);
    expect(component).toBeTruthy();
    // navigateSpy = spyOn(router, 'navigate');
    // component.goSomewhere();
    // expect(navigateSpy).toHaveBeenCalledWith(['/expectedUrl']);
  });
});