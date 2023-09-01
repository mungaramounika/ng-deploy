import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.onpromiss();
    this.onObser();
  }
  onpromiss(){
    const promiss=new Promise((suc,fail)=>{
      let x=100;

      if(x%2==0){
        suc("Entered value Even1")
        suc("Entered value Even2")
        suc("Entered value Even3")
        suc("Entered value Even4")
        suc("Entered value Even5")
        suc("Entered value Even6")
      }
      else{
        fail("Entered value odd")
      }
    })
    promiss.then(out=>console.log(out)).catch(res=>console.log(res))
  }
  onObser(){

    const obj=new Observable(x=>{
     x.next("Api 1")
     x.next("Api 2")
     x.next("Api 3")
     x.next("Api 4")
     x.next("Api 5")
    })
    obj.subscribe(result=>console.log(result))
  }
  
}

