import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit,OnChanges,DoCheck{
  @Input() name1:any;

  constructor(){

  }
  ngOnChanges(name:any): void {
    console.log("ngchange",name)
  }
  
  ngOnInit(): void {
    console.log("ngonit",this.name1)
  }
  
  ngDoCheck(): void {
    console.log("Do Check")
  }
  ngOnDestroy(): void {
    console.log("DISTROY-Data Not Received from parent")
  }
  
}
