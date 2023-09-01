import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent {
    getName="MVRTechspark"
    visible:any=true

    data(name:any){
    this.getName=name;
    console.log(this.getName)
    }
    fun(){
      this.visible=false
    }
}
