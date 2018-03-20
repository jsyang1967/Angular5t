import { Component, OnInit } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  show = true;
  Score_num =60;
 
  constructor(private bmiService:BmiService) { }

  ngOnInit() {
    this.bmiService.pub_temp=99;
  }

  xxxx(){
    this.show= !this.show;
    console.log(this.show);
  }

  

}
