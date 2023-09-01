import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    ProfileComponent,
    UsersComponent,
    DashboardheaderComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports:[
    DashboardComponent,
    DashboardHomeComponent,
    ProfileComponent,
  ]
})
export class DashboardModule { }
