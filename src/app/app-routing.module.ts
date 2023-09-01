import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ContactusGuard } from './Guards/contactus.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { TableComponent } from './table/table.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"about",component:AboutComponent},
  {path:"courses",component:CoursesComponent},
  {path:"services",component:ServicesComponent},
  {path:"life",component:LifeCycleComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"register",component:RegisterComponent},
  {path:"table",component:TableComponent},
  {path:"parent",component:ParentComponent},
  {path:"",component:AdminComponent},
  {path:"admin",redirectTo:"/",pathMatch:"full"},
  {path:"dashboard",loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule),canActivate:[ContactusGuard]},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
