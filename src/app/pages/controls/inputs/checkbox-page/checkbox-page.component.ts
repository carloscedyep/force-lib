import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkbox-page',
  templateUrl: './checkbox-page.component.html',
  styleUrls: ['./checkbox-page.component.scss'],
})
export class CheckboxPageComponent implements OnInit {
  checkboxFormGroup = this.formBuilder.group({
    checkbox: [false, Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
