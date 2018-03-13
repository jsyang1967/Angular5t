import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit {
  weekday:string[]=["1","2","3","4","5"]
  now = new Date();
  user:object[] =[
    {"name":"Lux","adress":"taipei"},
    {"name":"bb","adress":"cc"},
  ]
  
  score:string[]=["10分","20分","30","40","50"]

  num:number[]=[]


  constructor() {
     for (let i =10;i <=80 ;i+=10)
     this.num.push(i);

   }

  ngOnInit() {
  }

}
