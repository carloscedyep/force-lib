import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { AccordionBodyComponent } from '../accordion-body/accordion-body.component';
import { AccordionLabelComponent } from '../accordion-label/accordion-label.component';

@Component({
  selector: 'force-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  @Input()
  label: string;

  @ContentChild(AccordionLabelComponent)
  buttonComponent: AccordionLabelComponent;

  @ContentChild(AccordionBodyComponent)
  bodyComponent: AccordionBodyComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
