import { Component, ElementRef, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss']
})
export class ButtonPageComponent implements OnInit {

  clickCount: number = 0;

  buttonFormGroup = this.formBuilder.group({
    check: [false, [Validators.required,Validators.requiredTrue]]
  })

  constructor(private formBuilder: FormBuilder,
              private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  copy(id: string){
    const textarea = this.elRef.nativeElement.querySelector('#'+id)
    textarea.select();
    document.execCommand('copy')
    textarea.setSelectionRange(0, 0);
    console.log(textarea.value)
  }

}
