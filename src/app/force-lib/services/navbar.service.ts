import { Injectable } from '@angular/core';
import { Navbar } from '../models/navbar';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor() {}

  public createNavbar(array: any[]) {
    var navbar: Navbar[] = [];

    for (var i = 0; i < array.length; i++) {
      if (!this.pushChild(navbar, array[i])) {
        var navbarItem: Navbar = new Navbar();
        navbarItem.id = array[i].id;
        navbarItem.text = array[i].text;
        navbarItem.routeLink = array[i].routeLink;
        navbarItem.childrens = [];
        navbar.push(navbarItem);
      }
    }

    return navbar;
  }

  public pushChild(navbar: Navbar[], child: any): boolean {
    if (navbar == undefined) {
      return false;
    }

    for (var i = 0; i < navbar.length; i++) {
      if (navbar[i].id == child.parentId) {
        var navbarItem: Navbar = new Navbar();
        navbarItem.id = child.id;
        navbarItem.text = child.text;
        navbarItem.routeLink = child.routeLink;
        navbarItem.childrens = [];
        navbar[i].childrens.push(navbarItem);
        return true;
      } else {
        if (this.pushChild(navbar[i].childrens, child)) {
          return true;
        }
      }
    }

    return false;
  }
}
