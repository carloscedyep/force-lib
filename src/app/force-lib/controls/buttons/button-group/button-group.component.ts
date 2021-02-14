import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'force-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent implements OnInit {
  @Input()
  lenght: string = 'content';

  @Input()
  color: string = 'outline';

  @Input()
  items: any[] = [];

  @Output()
  clickEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  clicked(id: string) {
    this.clickEvent.emit(id);
  }
}
