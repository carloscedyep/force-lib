import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'force-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  idControl: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  label: string = '';

  @Input()
  type: string = 'text';

  @Input()
  value: string = '';

  @Input()
  textAlign: string = 'left';

  @Input()
  lenght: string = 'normal';

  @Input()
  color: string = 'light';

  @Input()
  prefix: string = '';

  @Input()
  sufix: string = '';

  @Input()
  hint: string = '';

  @Input()
  isReadonly: boolean = false;

  @Input()
  isInvalid: boolean = false;

  constructor(@Self()
              @Optional()
              private ngControl: NgControl) { 
                if (this.ngControl) {
                  this.ngControl.valueAccessor = this;
                }
              }

  ngOnInit(): void {
    if (this.value != undefined && this.value.length > 0){
      this.value = this.value;
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched() {}

  public onChange(value: any) {}

}
