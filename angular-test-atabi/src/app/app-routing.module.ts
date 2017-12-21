import { JobComponent } from './components/job/job.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SessionService } from './services/session.service';


const routes: Routes = [
  { path: '', component: LayoutComponent,
children: [
   { path: '', component: HomeComponent },
   { path: 'jobs', component: JobsComponent,canActivate: [SessionService]},
   { path: 'jobs/view/:idDesign', component: JobComponent, canActivate: [SessionService]},
] },
  { path: 'login', component: LoginComponent, pathMatch: 'full', },
  { path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

