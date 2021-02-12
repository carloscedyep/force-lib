import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buttongroup-page',
  templateUrl: './buttongroup-page.component.html',
  styleUrls: ['./buttongroup-page.component.scss'],
})
export class ButtongroupPageComponent implements OnInit {
  buttonName: string = '';

  buttonFormGroup = this.formBuilder.group({
    check: [false, [Validators.required, Validators.requiredTrue]],
  });

  buttonsgroup1: any[] = [
    { idControl: 'button1', text: 'botón 1' },
    { idControl: 'button2', text: 'botón 2' },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  clickBoton(id: string) {
    this.buttonName = 'click en boton ' + id;
  }
}
