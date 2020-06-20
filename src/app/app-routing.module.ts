import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import {CandlestickComponent } from './components/candlestick/candlestick.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'dashboard', component: DashboardComponent },
  {path: 'candlestick', component: CandlestickComponent},
  {path: 'news', component: NewsComponent},
  {path:'dashboard/clients', component: ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
