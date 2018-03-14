import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  tw = 100;
  r = 2;
  @Input() abc = 100;
  @Output() twMoneyChange:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  change(event:any){
    console.log(event); 
    this.twMoneyChange.emit(event);
  }
}
