import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ValidateService} from './services/validate.service'
import { AuthService } from './services/auth.service';
import { TradelogService } from './services/tradelog.service';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { AngularMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandlestickComponent } from './components/candlestick/candlestick.component';
import { LiveMarketDataService } from './services/live-market-data.service';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';
import { ClientsComponent } from './components/clients/clients.component';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {LiveNewsService } from './services/live-news.service';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    Navbar2Component,
    CandlestickComponent,
    ClientsComponent,
    NewsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GoogleChartsModule,
    FlashMessagesModule.forRoot(),
    TableModule,
    ChartModule,
    CardModule,
    DialogModule,


  ],
  // exports: [
  //   MatCardModule,
  //   MatFormFieldModule,
    // MatListModule
    // MatCheckboxModule
  // ],
  providers:[
    // { provide: 'ORIGIN_URL', useValue: location.origin },
    ValidateService,
    AuthService,
    LiveMarketDataService,
    TradelogService,
    LiveNewsService
    // {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
