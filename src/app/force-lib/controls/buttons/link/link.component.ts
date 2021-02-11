import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'force-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input()
  icon: string = '';

  @Input()
  text: string = '';

  @Input()
  link: string = '';

  @Input()
  target: string = '_self';

  constructor() { }

  ngOnInit(): void {
  }

}
