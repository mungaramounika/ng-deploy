import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TableComponent } from './table/table.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeComponent } from './life-cycle/life-cycle/life/life.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CoursesComponent,
    ServicesComponent,
    ContactusComponent,
    FooterComponent,
    RegisterComponent,
    PagenotfoundComponent,
    TableComponent,
    AdminComponent,
    LifeCycleComponent,
    LifeComponent,
    ParentComponent,
    ChildComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
