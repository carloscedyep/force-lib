import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'force-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input()
  text: string = '';

  @Input()
  aling: string = 'left';

  @Input()
  lenght: string = 'normal';

  @Input()
  color: string = 'light';

  @Input()
  badge: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
