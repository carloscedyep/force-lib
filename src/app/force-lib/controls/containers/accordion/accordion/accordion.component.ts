import {
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, delay, map } from 'rxjs/operators';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'force-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @ContentChildren(AccordionItemComponent)
  buttons: QueryList<AccordionItemComponent>;

  buttonItems$: Observable<AccordionItemComponent[]>;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.buttonItems$ = this.buttons.changes
      .pipe(startWith(''))
      .pipe(delay(0))
      .pipe(map(() => this.buttons.toArray()));
  }

  abrirbody(id: string) {
    const body = this.elRef.nativeElement.querySelector('#' + id);
    const label = this.elRef.nativeElement.querySelector('#label' + id);
    const bodys = body.parentElement.parentElement.parentElement.querySelectorAll(
      '.body'
    );
    const labels = label.parentElement.parentElement.parentElement.querySelectorAll(
      '.label'
    );

    if (bodys.length > 0) {
      var otherbodys = Array.prototype.filter.call(
        bodys,
        function (testElement) {
          return testElement.id != id;
        }
      );

      otherbodys.forEach((element) => {
        element.setAttribute('expanded', 'false');
        element.style.maxHeight = null;
      });
    }

    if (labels.length > 0) {
      var otherlabels = Array.prototype.filter.call(
        labels,
        function (testElement) {
          return testElement.id != id;
        }
      );

      otherlabels.forEach((element) => {
        element.setAttribute('expanded', 'false');
      });
    }

    if (body) {
      if (body.getAttribute('expanded') == 'true') {
        body.setAttribute('expanded', 'false');
        label.setAttribute('expanded', 'false');
        body.style.maxHeight = null;
      } else {
        body.setAttribute('expanded', 'true');
        label.setAttribute('expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    }
  }
}
