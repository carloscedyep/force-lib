import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'force-dropdown-label',
  templateUrl: './dropdown-label.component.html',
  styleUrls: ['./dropdown-label.component.scss'],
})
export class DropdownLabelComponent implements OnInit {
  @ViewChild(TemplateRef)
  buttonContent: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
