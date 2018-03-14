import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson5-t',
  templateUrl: './lesson5-t.component.html',
  styleUrls: ['./lesson5-t.component.css']
})
export class Lesson5TComponent implements OnInit {
  @Input() burrontag:string = "This is simple Button";
 
  constructor() { }

  ngOnInit() {
  }

}
