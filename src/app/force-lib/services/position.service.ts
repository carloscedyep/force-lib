import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  constructor() {}

  public setPosition(
    element: any,
    leftParent: number,
    bottomParent: number,
    widthParent: number,
    heightParent: number,
    fixed: boolean
  ) {
    var left = leftParent;
    var top = bottomParent + (fixed ? 0 : window.scrollY);
    const height = element.getBoundingClientRect().height;
    const width = element.getBoundingClientRect().width;
    const screenX = document.documentElement.clientWidth;
    const screenY =
      document.documentElement.clientHeight + (fixed ? 0 : window.scrollY);

    if (left + width > screenX) {
      left = left - width + widthParent;
    }

    if (top + height > screenY) {
      top = top - heightParent - height;
    }

    element.style.left = left + 'px';
    element.style.top = top + 'px';
  }
}
