import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'force-dropdown-body',
  templateUrl: './dropdown-body.component.html',
  styleUrls: ['./dropdown-body.component.scss'],
})
export class DropdownBodyComponent implements OnInit {
  @ViewChild(TemplateRef)
  bodyContent: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
