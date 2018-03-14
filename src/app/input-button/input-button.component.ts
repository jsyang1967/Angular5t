import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {
@Input() button = "abc";

  constructor() { }

  ngOnInit() {
  }

}
