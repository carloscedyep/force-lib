import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.scss'],
})
export class SelectPageComponent implements OnInit {
  selectFormGroup = this.formBuilder.group({
    selectedValue: ['', Validators.required],
  });

  selectItems: any[] = [
    { value: '1', text: 'Carlos' },
    { value: '2', text: 'María' },
    { value: '3', text: 'Juan' },
    { value: '4', text: 'Lucía' },
    { value: '5', text: 'Víctor' },
    { value: '6', text: 'Bianca' },
    { value: '7', text: 'Alexander' },
    { value: '8', text: 'Damaris' },
    { value: '9', text: 'Claudio' },
    { value: '10', text: 'Claudia' },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
