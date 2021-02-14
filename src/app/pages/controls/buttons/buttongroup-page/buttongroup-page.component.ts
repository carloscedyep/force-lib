import { Component, ElementRef, OnInit } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder, private elRef: ElementRef) {}

  ngOnInit(): void {}

  clickBoton(id: string) {
    this.buttonName = 'click en boton ' + id;
  }

  copy(id: string) {
    const textarea = this.elRef.nativeElement.querySelector('#' + id);
    textarea.select();
    document.execCommand('copy');
    textarea.setSelectionRange(0, 0);
    console.log(textarea.value);
  }
}
