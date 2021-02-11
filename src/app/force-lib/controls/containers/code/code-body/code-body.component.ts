import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'force-code-body',
  templateUrl: './code-body.component.html',
  styleUrls: ['./code-body.component.scss']
})
export class CodeBodyComponent implements OnInit {

  @ViewChild(TemplateRef)
  bodyContent: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
