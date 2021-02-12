import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { startWith, map, delay } from 'rxjs/operators';

@Component({
  selector: 'force-tabs',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @ContentChildren(TabItemComponent)
  tabs: QueryList<TabItemComponent>;

  tabItems$: Observable<TabItemComponent[]>;

  activeTab: TabItemComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.tabItems$ = this.tabs.changes
      .pipe(startWith(''))
      .pipe(delay(0))
      .pipe(map(() => this.tabs.toArray()));
  }

  ngAfterContentChecked() {
    if (!this.activeTab) {
      Promise.resolve().then(() => {
        this.activeTab = this.tabs.first;
      });
    }
  }

  selectTab(tabItem: TabItemComponent) {
    if (this.activeTab === tabItem) {
      return;
    }

    if (this.activeTab) {
      this.activeTab.isActive = false;
    }

    this.activeTab = tabItem;

    tabItem.isActive = true;
  }
}
