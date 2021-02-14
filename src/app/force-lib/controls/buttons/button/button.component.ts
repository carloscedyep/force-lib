import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'force-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  idControl: string = '';

  @Input()
  text: string = '';

  @Input()
  icon: string = '';

  @Input()
  isTypeIcon: boolean = false;

  @Input()
  isReadonly: boolean = false;

  @Input()
  haveBorder: boolean = true;

  @Input()
  lenght: string = 'content';

  @Input()
  color: string = 'outline';

  @Input()
  badge: string = '';

  @Input()
  isInvalid: boolean = false;

  @Output()
  clickEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  clicked(id: string) {
    if (!this.isReadonly && !this.isInvalid) {
      this.clickEvent.emit(id);
    }
  }
}
