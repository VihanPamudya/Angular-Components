import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('f')
  formdata!: NgForm;

  constructor(){}

  submitForm(f:NgForm){
    this.formdata=f;
    console.log(this.formdata.value.name)
    console.log(this.formdata.value.email)

  }
}
