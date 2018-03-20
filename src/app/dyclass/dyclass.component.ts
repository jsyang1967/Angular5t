import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dyclass',
  templateUrl: './dyclass.component.html',
  styleUrls: ['./dyclass.component.css']
})
export class DyclassComponent implements OnInit {
 @ViewChild('pc') pc:ElementRef;
  constructor(private route: ActivatedRoute) { }
  number:any;
  number2:any;
  ngOnInit() {
    this.number = +this.route.snapshot.params.number;
    this.number2 = +this.route.snapshot.params.number2;
  }

  addc(){
    this.pc.nativeElement.classList.add('rdd');
  }

  rmc(){
    this.pc.nativeElement.classList.remove('rdd');
  }

}
