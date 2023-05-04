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

  selectedPastDate(value: Date, pastDays:number) {
  return new Date (value.setDate(value.getDate() - pastDays)).toISOString();
  }


  submit() {
  if (this.dateForm.value.date) {
    this.isSubmitted = true;
  }
  const date = new Date();
  this.today =  date.toISOString();
  this.yesterday = new Date (date.setDate(date.getDate() - 1)).toISOString();  
  this.tenDaysPastSelected = this.selectedPastDate(new Date(this.dateForm.value.date), 10);
  this.oneYearPastSelected = this.selectedPastDate(new Date(this.dateForm.value.date), 365);
  this.minDate = this.today;
  this.maxDate = (date.getFullYear() + 5).toString();
  }

}
