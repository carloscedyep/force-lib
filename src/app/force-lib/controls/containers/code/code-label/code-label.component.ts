import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'force-code-label',
  templateUrl: './code-label.component.html',
  styleUrls: ['./code-label.component.scss']
})
export class CodeLabelComponent implements OnInit {

  @ViewChild(TemplateRef)
  labelContent: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
