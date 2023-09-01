import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   public data:any;
   ngOnInit(): void {
     let user:any=localStorage.getItem("user")
     this.data=JSON.parse(user)
     console.log(this.data)
   }
}
