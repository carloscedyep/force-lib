import { Component, ElementRef, HostListener, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { PositionService } from 'src/app/force-lib/services/position.service';

@Component({
  selector: 'force-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Input()
  isFixed: boolean = false;
  
  @Input()
  idControl: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  label: string = '';

  @Input()
  value: Date;

  @Input()
  textAlign: string = 'left';

  @Input()
  lenght: string = 'normal';

  @Input()
  color: string = 'light';

  @Input()
  hint: string = '';

  @Input()
  isInvalid: boolean = false;

  text: string = '';

  constructor(private positionService: PositionService,
              private elRef: ElementRef,
              @Self()
              @Optional()
              private ngControl: NgControl) {
                if (this.ngControl) {
                  this.ngControl.valueAccessor = this;
                }
              }

  ngOnInit(): void {
    if (this.value != undefined && this.value.toString().length > 0){
      this.value =  this.value;
      this.selectDate(this.value);
      this.onChange(this.value)
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched() {}

  public onChange(value: any) {
  }

  selectDate(day: Date){
    const menu = this.elRef.nativeElement.querySelector('#menu'+this.idControl);
    this.value = day;
    this.onChange(this.value);

    if (menu){
      if (menu.getAttribute('expanded') == 'true'){
        menu.setAttribute('expanded','false')
        menu.style.left = '-100000%';
        menu.style.top = '-100000%';
      }
    }
  }

  abrirMenu(){
    const menu = this.elRef.nativeElement.querySelector('#menu'+this.idControl);
    const button = this.elRef.nativeElement.querySelector('#button'+this.idControl);
    const text = this.elRef.nativeElement.querySelector('#text'+this.idControl);

    if (menu){
      if (menu.getAttribute('expanded') == 'true'){
        menu.setAttribute('expanded','false')
        menu.style.left = '-100000%';
        menu.style.top = '-100000%';
      }
      else {
        const leftText = text.getBoundingClientRect().left;
        const bottomText = text.getBoundingClientRect().bottom;
        const widthText = text.getBoundingClientRect().width + button.getBoundingClientRect().width;
        const heightText = text.getBoundingClientRect().height;

        menu.setAttribute('expanded','true')
        this.positionService.setPosition(menu,leftText,bottomText,widthText,heightText, this.isFixed)
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menu = this.elRef.nativeElement.querySelector('#menu' + this.idControl);
    const mleftElement = menu.getBoundingClientRect().left
    const mrightElement = menu.getBoundingClientRect().right
    const mtopElement = menu.getBoundingClientRect().top
    const mbottomElement = menu.getBoundingClientRect().bottom
    
    const button = this.elRef.nativeElement.querySelector('#button' + this.idControl);
    const bleftElement = button.getBoundingClientRect().left
    const brightElement = button.getBoundingClientRect().right
    const btopElement = button.getBoundingClientRect().top
    const bbottomElement = button.getBoundingClientRect().bottom

    if(event.clientX < mleftElement || event.clientX > mrightElement || event.clientY < mtopElement || event.clientY > mbottomElement){
      if(event.clientX < bleftElement || event.clientX > brightElement || event.clientY < btopElement || event.clientY > bbottomElement){
        if (menu.getAttribute('expanded') == 'true'){
          menu.setAttribute('expanded','false')
          menu.style.left = '-100000%';
          menu.style.top = '-100000%';
          event.stopPropagation();
        }
      }
    }
  }

}
