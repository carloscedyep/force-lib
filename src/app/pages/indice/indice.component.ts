import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/force-lib/models/navbar';
import { NavbarService } from 'src/app/force-lib/services/navbar.service';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss']
})
export class IndiceComponent implements OnInit {

  darkTheme: boolean = false;

  navItems: any[] = [
    {id: 'config', text: 'Configuraciones', parentId: '', routeLink: ''},
    {id: 'setup', text: 'Instalación', parentId: 'config', routeLink: 'setup'},
    {id: 'controls', text: 'Controls', parentId: '', routeLink: ''},
    {id: 'buttons', text: 'Buttons', parentId: 'controls', routeLink: ''},
    {id: 'button', text: 'Button', parentId: 'buttons', routeLink: 'button'},
    {id: 'buttongroup', text: 'Button group', parentId: 'buttons', routeLink: 'buttongroup'},
    {id: 'commons', text: 'Commons', parentId: 'controls', routeLink: ''},
    {id: 'alert', text: 'Alert', parentId: 'commons', routeLink: ''},
    {id: 'calendar', text: 'Calendar', parentId: 'commons', routeLink: 'calendar'},
    {id: 'calendarrange', text: 'Calendar range', parentId: 'commons', routeLink: 'calendarrange'},
    {id: 'chip', text: 'Chip', parentId: 'commons', routeLink: ''},
    {id: 'containers', text: 'Containers', parentId: 'controls', routeLink: ''},
    {id: 'accordion', text: 'Accordion', parentId: 'containers', routeLink: 'accordion'},
    {id: 'dropdown', text: 'Dropdown', parentId: 'containers', routeLink: 'dropdown'},
    {id: 'list', text: 'List', parentId: 'containers', routeLink: 'list'},
    {id: 'navbar', text: 'Navbar', parentId: 'containers', routeLink: 'navbar'},
    {id: 'table', text: 'Table', parentId: 'containers', routeLink: ''},
    {id: 'timeline', text: 'Timeline', parentId: 'containers', routeLink: 'timeline'},
    {id: 'treeview', text: 'Treeview', parentId: 'containers', routeLink: ''},
    {id: 'inputs', text: 'Inputs', parentId: 'controls', routeLink: ''},
    {id: 'checkbox', text: 'Checkbox', parentId: 'inputs', routeLink: 'checkbox'},
    {id: 'datepicker', text: 'Datepicker', parentId: 'inputs', routeLink: 'datepicker'},
    {id: 'input', text: 'Input', parentId: 'inputs', routeLink: 'input'},
    {id: 'inputcount', text: 'Input count', parentId: 'inputs', routeLink: 'inputcount'},
    {id: 'inputnumber', text: 'Input number', parentId: 'inputs', routeLink: 'inputnumber'},
    {id: 'inputslider', text: 'Input slider', parentId: 'inputs', routeLink: 'inputslider'},
    {id: 'select', text: 'Select', parentId: 'inputs', routeLink: 'select'},
    {id: 'patterns', text: 'Patrones', parentId: '', routeLink: ''},
    {id: 'email', text: 'Email', parentId: 'patterns', routeLink: 'inputEmail'},
    {id: 'examples', text: 'Ejemplos', parentId: '', routeLink: ''},
    {id: 'login', text: 'Login', parentId: 'examples', routeLink: 'loginExample'},
  ]

  navbar: Navbar[] = [];

  constructor(private navbarService: NavbarService) {
    this.darkTheme = localStorage.getItem('theme')==='Dark'? true: false;
   }
  
  ngOnInit(): void {
    this.navbar = this.navbarService.createNavbar(this.navItems);
  }

  changeTheme(){
    this.darkTheme = !this.darkTheme;
    localStorage.setItem('theme', this.darkTheme ? 'Dark': 'Light');
  }
}
