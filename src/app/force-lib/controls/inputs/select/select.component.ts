import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Optional,
  Renderer2,
  Self,
} from '@angular/core';
import { FormBuilder, NgControl } from '@angular/forms';
import { PositionService } from 'src/app/force-lib/services/position.service';

@Component({
  selector: 'force-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input()
  idControl: string = '';

  @Input()
  placeholder: string = '';

  @Input()
  label: string = '';

  @Input()
  value: string = '';

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

  @Input()
  isReadonly: boolean = false;

  @Input()
  fixed: boolean = false;

  @Input()
  haveFilter: boolean = false;

  @Input()
  items: any[] = [];

  text: string = '';

  filterFromGroup = this.formBuilder.group({
    filter: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private positionService: PositionService,
    private render: Renderer2,
    private elRef: ElementRef,
    @Self()
    @Optional()
    private ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    if (this.value != undefined && this.value.length > 0) {
      const defaultItem = this.items.filter((i) =>
        i.value.includes(this.value)
      );
      if (defaultItem.length > 0) {
        this.selectItem(defaultItem[0].value, defaultItem[0].text);
      }
    }
  }

  ngAfterComponentInit() {
    if (this.value != undefined && this.value.length > 0) {
      const defaultItem = this.items.filter((i) =>
        i.value.includes(this.value)
      );
      if (defaultItem.length > 0) {
        this.selectItem(defaultItem[0].value, defaultItem[0].text);
      }
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

  selectItem(value: string, text: string) {
    let menu = this.elRef.nativeElement.querySelector('#menu' + this.idControl);

    if (menu) {
      if (menu.getAttribute('expanded') == 'true') {
        menu.setAttribute('expanded', 'false');
        menu.style.left = '-100000%';
        menu.style.top = '-100000%';
      }
    }

    this.value = value;
    this.text = text;
    this.filterFromGroup.controls.filter.setValue('');
    this.onChange(this.value);
  }

  abrirMenu() {
    if (!this.isReadonly) {
      const menu = this.elRef.nativeElement.querySelector(
        '#menu' + this.idControl
      );
      const button = this.elRef.nativeElement.querySelector(
        '#button' + this.idControl
      );
      const text = this.elRef.nativeElement.querySelector(
        '#text' + this.idControl
      );

      if (menu) {
        if (menu.getAttribute('expanded') == 'true') {
          menu.setAttribute('expanded', 'false');
          menu.style.left = '-100000%';
          menu.style.top = '-100000%';
        } else {
          const leftText = text.getBoundingClientRect().left;
          const bottomText = text.getBoundingClientRect().bottom;
          const widthText =
            text.getBoundingClientRect().width +
            button.getBoundingClientRect().width;
          const heightText = text.getBoundingClientRect().height;

          this.render.setStyle(menu, 'width', widthText + 'px');

          menu.setAttribute('expanded', 'true');

          this.positionService.setPosition(
            menu,
            leftText,
            bottomText,
            widthText,
            heightText,
            this.fixed
          );
        }
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menu = this.elRef.nativeElement.querySelector(
      '#menu' + this.idControl
    );
    const mleftElement = menu.getBoundingClientRect().left;
    const mrightElement = menu.getBoundingClientRect().right;
    const mtopElement = menu.getBoundingClientRect().top;
    const mbottomElement = menu.getBoundingClientRect().bottom;

    const button = this.elRef.nativeElement.querySelector(
      '#button' + this.idControl
    );
    const bleftElement = button.getBoundingClientRect().left;
    const brightElement = button.getBoundingClientRect().right;
    const btopElement = button.getBoundingClientRect().top;
    const bbottomElement = button.getBoundingClientRect().bottom;

    if (
      event.clientX < mleftElement ||
      event.clientX > mrightElement ||
      event.clientY < mtopElement ||
      event.clientY > mbottomElement
    ) {
      if (
        event.clientX < bleftElement ||
        event.clientX > brightElement ||
        event.clientY < btopElement ||
        event.clientY > bbottomElement
      ) {
        if (menu.getAttribute('expanded') == 'true') {
          menu.setAttribute('expanded', 'false');
          menu.style.left = '-100000%';
          menu.style.top = '-100000%';
          event.stopPropagation();
        }
      }
    }
  }
}
