import {
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, delay, map } from 'rxjs/operators';
import { PositionService } from 'src/app/force-lib/services/position.service';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';

@Component({
  selector: 'force-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input()
  idControl: string;

  @Input()
  isFixed: boolean = false;

  @Input()
  showHover: boolean = false;

  @ContentChildren(SidebarItemComponent)
  buttons: QueryList<SidebarItemComponent>;

  buttonItems$: Observable<SidebarItemComponent[]>;

  constructor(
    private elRef: ElementRef,
    private positionService: PositionService
  ) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.buttonItems$ = this.buttons.changes
      .pipe(startWith(''))
      .pipe(delay(0))
      .pipe(map(() => this.buttons.toArray()));
  }

  abrirMenu() {
    const menu = this.elRef.nativeElement.querySelector(
      '#menu' + this.idControl
    );

    if (menu) {
      if (menu.getAttribute('expanded') == 'true') {
        menu.setAttribute('expanded', 'false');
        menu.style.left = '-300px';
      } else {
        menu.setAttribute('expanded', 'true');
        menu.style.left = '0px';
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menu = this.elRef.nativeElement.querySelector(
      '#menu' + this.idControl
    );

    const button = this.elRef.nativeElement.querySelector(
      '#button' + this.idControl
    );

    if (menu && button) {
      var mleftElement = menu.getBoundingClientRect().left;
      var mrightElement = menu.getBoundingClientRect().right;
      var mtopElement = menu.getBoundingClientRect().top;
      var mbottomElement = menu.getBoundingClientRect().bottom;

      var bleftElement = button.getBoundingClientRect().left;
      var brightElement = button.getBoundingClientRect().right;
      var btopElement = button.getBoundingClientRect().top;
      var bbottomElement = button.getBoundingClientRect().bottom;

      if (
        event.clientX < mleftElement ||
        event.clientX > mrightElement ||
        event.clientY < mtopElement ||
        event.clientY > mbottomElement
      ) {
        if (
          event.clientX < bleftElement ||
          event.clientX > brightElement ||
          event.clientY < btopElement ||
          event.clientY > bbottomElement
        ) {
          if (menu.getAttribute('expanded') == 'true') {
            menu.setAttribute('expanded', 'false');
            menu.style.left = '-300px';
            event.stopPropagation();
          }
        }
      }
    }
  }
}
