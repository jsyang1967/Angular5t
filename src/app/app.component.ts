import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aaa:Account = {
    accout:'lux',
    passwd:'abc123'
  }
 

  // zzz(){
  //    console.log('1123');
  // }
}


export interface Account{
  accout:string,
  passwd:string
}