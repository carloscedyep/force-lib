import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'force-accordion-label',
  templateUrl: './accordion-label.component.html',
  styleUrls: ['./accordion-label.component.scss']
})
export class AccordionLabelComponent implements OnInit {

  @ViewChild(TemplateRef)
  buttonContent: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
