import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Navbar } from 'src/app/force-lib/models/navbar';

@Component({
  selector: 'force-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  items: Navbar[];


  @Input()
  parentId: any = '';
  
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
  }

  openMenu(id: string){
    const body = this.elRef.nativeElement.querySelector('#'+id);
    const label = this.elRef.nativeElement.querySelector('#label'+id);

    if (body){
      if (body.getAttribute('expanded') == 'true'){
        body.setAttribute('expanded','false')
        body.style.maxHeight = null;
      }
      else {
        body.setAttribute('expanded','true')
        body.style.maxHeight = body.scrollHeight + "px"; //screen.height + "px";
      }
    }

    if(this.parentId != undefined && this.parentId.length > 0){
      const parentBody = document.getElementById(this.parentId);

      if (parentBody){
        if (parentBody.getAttribute('expanded') == 'true'){
          parentBody.style.maxHeight = parentBody.scrollHeight + body.scrollHeight + "px";
        }
      }
    }

    if (label){
      if (label.getAttribute('expanded') == 'true'){
        label.setAttribute('expanded','false')
      }
      else {
        label.setAttribute('expanded','true')
      }
    }
  }

}
