import { Component, ContentChildren, ElementRef, HostListener, Input, OnInit, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import { PositionService } from 'src/app/force-lib/services/position.service';
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';


@Component({
  selector: 'force-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input()
  isFixed: boolean = false;

  @ContentChildren(DropdownItemComponent)
  buttons: QueryList<DropdownItemComponent>;

  buttonItems$: Observable<DropdownItemComponent[]>;

  constructor(private elRef: ElementRef,
              private positionService: PositionService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.buttonItems$ = this.buttons.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.buttons.toArray()));
  }

  abrirMenu(id: string){
    const menu = this.elRef.nativeElement.querySelector('#menu'+id);
    const button = this.elRef.nativeElement.querySelector('#button'+id);

    if (menu){
      if (menu.getAttribute('expanded') == 'true'){
        menu.setAttribute('expanded','false')
        menu.style.left = '-100000%';
        menu.style.top = '-100000%';
      }
      else {
        menu.setAttribute('expanded','true')
        const leftButton = button.getBoundingClientRect().left;
        const bottomButton = button.getBoundingClientRect().bottom;
        const widthButton = button.getBoundingClientRect().width;
        const heightButton = button.getBoundingClientRect().height;

        menu.setAttribute('expanded','true')
        this.positionService.setPosition(menu,leftButton,bottomButton,widthButton,heightButton, this.isFixed)
      }
    }
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menu = this.elRef.nativeElement.querySelector('#menu' + this.buttons.first.idControl);
    var mleftElement = menu.getBoundingClientRect().left
    var mrightElement = menu.getBoundingClientRect().right
    var mtopElement = menu.getBoundingClientRect().top
    var mbottomElement = menu.getBoundingClientRect().bottom
    
    const button = this.elRef.nativeElement.querySelector('#button' + this.buttons.first.idControl);
    var bleftElement = button.getBoundingClientRect().left
    var brightElement = button.getBoundingClientRect().right
    var btopElement = button.getBoundingClientRect().top
    var bbottomElement = button.getBoundingClientRect().bottom

    if(event.clientX < mleftElement || event.clientX > mrightElement || event.clientY < mtopElement || event.clientY > mbottomElement){
      if(event.clientX < bleftElement || event.clientX > brightElement || event.clientY < btopElement || event.clientY > bbottomElement){
        if (menu.getAttribute('expanded') == 'true'){
          menu.setAttribute('expanded','false')
          menu.style.left = '-100000%';
          menu.style.top = '-100000%';
          event.stopPropagation();
        }
      }
    }
  }

}
