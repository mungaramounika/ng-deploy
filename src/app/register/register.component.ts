import { Component } from '@angular/core';
import { ApiService } from '../apiservice/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public student={fname:"",lname:"",email:"",phone:"",password:""}
  public msg:any;
  public clr={red:false,green:false}
  
  constructor(public api:ApiService){

  }
  register(){
    console.log(this.student)
    const data=new FormData()
    data.append("fname",this.student.fname)
    data.append("lname",this.student.lname)
    data.append("email",this.student.email)
    data.append("ph",this.student.phone)
    data.append("pwd",this.student.password)


    this.api.register(data).subscribe((response:any)=>{
      console.log(response)
      //fname: 'mounika', lname: 'reddy', email: 'mounika@gmail.com', phone: 89765432, password: '123'//
      //response=status: 1, message: 'Register  Successfully'//
      this.msg=response.message
      if(response.status==1){
        this.clr={red:false,green:true}
      }
      else{
      this.clr={red:true,green:false}
      }
    })
  }
  }
  
