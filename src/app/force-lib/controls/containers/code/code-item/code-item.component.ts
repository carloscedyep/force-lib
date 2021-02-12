import { Component, ContentChild, OnInit } from '@angular/core';
import { CodeBodyComponent } from '../code-body/code-body.component';
import { CodeLabelComponent } from '../code-label/code-label.component';

@Component({
  selector: 'force-code-item',
  templateUrl: './code-item.component.html',
  styleUrls: ['./code-item.component.scss'],
})
export class CodeItemComponent implements OnInit {
  @ContentChild(CodeLabelComponent)
  labelComponent: CodeLabelComponent;

  @ContentChild(CodeBodyComponent)
  bodyComponent: CodeBodyComponent;

  constructor() {}

  ngOnInit(): void {}
}
