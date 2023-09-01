import { Component } from '@angular/core';
import { ApiService } from '../apiservice/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  public student={email:"",password:""}
  public msg:any;
  public clr={red:false,green:false}
  
   constructor(public api:ApiService ,public r:Router){
  
   }
   login(){
      console.log(this.student)
      const data=new FormData()
      
      data.append("userEmail",this.student.email)
      data.append("userPassword",this.student.password)

      this.api.login(data).subscribe((response:any)=>{
        console.log(response)
        //response={status: 1, message: 'Register  Successfully'}
        this.msg=response.message
        if(response.status==1){
          this.clr={red:false,green:true}
          localStorage.setItem("email",this.student.email)
          localStorage.setItem("user",JSON.stringify(response.data[0]))
          this.r.navigate(['/dashboard'])
        }
        else{
          this.clr={red:true,green:false}
        }
      })
  
  
    }
}
