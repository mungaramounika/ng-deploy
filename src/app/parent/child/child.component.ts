import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() rname:any;
  @Output() pname=new EventEmitter()


  senddata(){
    this.pname.emit("THIS DATA COMING FORM PARENT")
  }
}
