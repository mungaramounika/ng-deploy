import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name="MOUNI-I AM COMING FROM PARENT"
  data:any;
  rdata(e:any){
    this.data=e
  }
  
}
