import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'force-sidebar-body',
  templateUrl: './sidebar-body.component.html',
  styleUrls: ['./sidebar-body.component.scss'],
})
export class SidebarBodyComponent implements OnInit {
  @ViewChild(TemplateRef)
  bodyContent: TemplateRef<any>;

  constructor() {}

  ngOnInit(): void {}
}
