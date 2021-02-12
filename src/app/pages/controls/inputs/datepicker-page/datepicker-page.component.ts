import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-datepicker-page',
  templateUrl: './datepicker-page.component.html',
  styleUrls: ['./datepicker-page.component.scss'],
})
export class DatepickerPageComponent implements OnInit {
  datepickerFormGroup = this.formBuilder.group({
    date: [null, Validators.required],
  });

  date: Date = new Date(2021, 2, 15);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
