import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'force-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.scss']
})
export class TabBodyComponent implements OnInit {

  @ViewChild(TemplateRef)
  bodyContent: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
