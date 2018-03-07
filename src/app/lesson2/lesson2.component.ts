import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  show = true;
  Score_num =60;
 
  constructor() { }

  ngOnInit() {
  }

  xxxx(){
    this.show= !this.show;
    console.log(this.show);
  }

  

}
