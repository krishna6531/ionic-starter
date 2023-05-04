import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
dateForm: FormGroup;
yesterday: string;
today: string;
tenDaysPastSelected: string;
oneYearPastSelected: string;
selectedDate:Date;
minDate: string
maxDate: string
isSubmitted = false

  constructor(public formBuilder: FormBuilder) { 
    this.dateForm= this.formBuilder.group({
      date: ['']
    })
  }

  getDate(event: Event) {
    this.dateForm.value.date  = new Date((event.target as HTMLInputElement).value).toISOString();
  }


  submit() {
  this.isSubmitted = true;
  const date = new Date();
  this.today =  date.toISOString();
  this.yesterday = new Date (date.setDate(date.getDate() - 1)).toISOString();
  this.selectedDate = new Date(this.dateForm.value.date);
  this.tenDaysPastSelected = new Date (this.selectedDate.setDate(this.selectedDate.getDate() - 10)).toISOString();
  this.oneYearPastSelected = new Date (this.selectedDate.setDate(this.selectedDate.getDate() - 365)).toISOString();
  this.minDate = this.today;
  this.maxDate = (date.getFullYear() + 5).toString();
  }

}
