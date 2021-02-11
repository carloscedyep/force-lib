import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { DropdownBodyComponent } from '../dropdown-body/dropdown-body.component';
import { DropdownLabelComponent } from '../dropdown-label/dropdown-label.component';


@Component({
  selector: 'force-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {

  @Input()
  idControl: string;

  @ContentChild(DropdownLabelComponent)
  buttonComponent: DropdownLabelComponent;

  @ContentChild(DropdownBodyComponent)
  bodyComponent: DropdownBodyComponent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
