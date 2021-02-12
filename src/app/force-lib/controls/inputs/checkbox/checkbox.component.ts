import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'force-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input()
  idControl: string = '';

  @Input()
  value: boolean = false;

  @Input()
  prefixText: string = '';

  @Input()
  sufixText: string = '';

  @Input()
  color: string = 'light';

  @Input()
  isReadonly: boolean = false;

  constructor(
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    if (this.value != undefined) {
      this.value = this.value;
    }
  }

  checked() {
    if (!this.isReadonly) {
      this.value = !this.value;
      this.onChange(this.value);
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
