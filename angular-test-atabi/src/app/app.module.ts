import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import {APP_BASE_HREF} from '@angular/common';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobComponent } from './components/job/job.component';

//Services
import { JobService } from './services/job.service';
import { SessionService } from './services/session.service';
import { TopbarComponent } from './components/topbar/topbar.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    JobsComponent,
    JobComponent,
    TopbarComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JobService,SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
