import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.css']
})
export class DashboardheaderComponent implements OnInit{
  email:any;

  constructor(public r:Router){

  }
  ngOnInit(): void {
    this.email=localStorage.getItem("email")
    if(!localStorage.getItem("email")){
      this.r.navigate(['/contactus'])
    }
  }

  signout(){
    this.r.navigate(['/contactus'])
    localStorage.clear()
  }
}

