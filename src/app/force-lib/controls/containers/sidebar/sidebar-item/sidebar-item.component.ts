import { Component, ContentChild, OnInit } from '@angular/core';
import { SidebarBodyComponent } from '../sidebar-body/sidebar-body.component';

@Component({
  selector: 'force-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent implements OnInit {
  @ContentChild(SidebarBodyComponent)
  bodyComponent: SidebarBodyComponent;

  constructor() {}

  ngOnInit(): void {}
}
