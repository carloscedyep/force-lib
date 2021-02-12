import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'force-accordion-body',
  templateUrl: './accordion-body.component.html',
  styleUrls: ['./accordion-body.component.scss'],
})
export class AccordionBodyComponent implements OnInit {
  @ViewChild(TemplateRef)
  bodyContent: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
