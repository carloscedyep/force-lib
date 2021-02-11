import { Component, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, delay, map } from 'rxjs/operators';
import { CodeItemComponent } from '../code-item/code-item.component';

@Component({
  selector: 'force-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input()
  idControl: string;

  @Input()
  rows: number = 10;

  @ContentChildren(CodeItemComponent)
  labels: QueryList<CodeItemComponent>;

  labelsItems$: Observable<CodeItemComponent[]>;

  
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    this.labelsItems$ = this.labels.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.labels.toArray()));
 
  }
}
