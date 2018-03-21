import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-ng-model-driven',
  templateUrl: './ng-model-driven.component.html',
  styleUrls: ['./ng-model-driven.component.css']
})
export class NgModelDrivenComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder) {}
  userForm: FormGroup
/*   userForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}'))
      })
  }); */

  ngOnInit() {
    this.userForm = this._formBuilder.group({
     name: [null, [Validators.required, Validators.minLength(4)]],
     email:[],
     address:this._formBuilder.group({
       street:[],
       city:[],
       postalcode:[null, [Validators.pattern('^[1-9][0-9]{4}')]]
     })
    });
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

}
