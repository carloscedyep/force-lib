import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupPageComponent } from './pages/configuration/setup-page/setup-page.component';
import { ButtonPageComponent } from './pages/controls/buttons/button-page/button-page.component';
import { ButtongroupPageComponent } from './pages/controls/buttons/buttongroup-page/buttongroup-page.component';
import { GridPageComponent } from './pages/controls/commons/grid-page/grid-page.component';
import { AccordionPageComponent } from './pages/controls/containers/accordion-page/accordion-page.component';
import { DropdownPageComponent } from './pages/controls/containers/dropdown-page/dropdown-page.component';
import { CheckboxPageComponent } from './pages/controls/inputs/checkbox-page/checkbox-page.component';
import { DatepickerPageComponent } from './pages/controls/inputs/datepicker-page/datepicker-page.component';
import { InputPageComponent } from './pages/controls/inputs/input-page/input-page.component';
import { SelectPageComponent } from './pages/controls/inputs/select-page/select-page.component';
import { IndiceComponent } from './pages/indice/indice.component';

const routes: Routes = [
  { path: '', redirectTo: 'indice', pathMatch: 'full' },
  {
    path: 'indice',
    component: IndiceComponent,
    children: [
      {
        path: 'setup',
        component: SetupPageComponent,
      },
      {
        path: 'accordion',
        component: AccordionPageComponent,
      },
      {
        path: 'button',
        component: ButtonPageComponent,
      },
      {
        path: 'buttongroup',
        component: ButtongroupPageComponent,
      },
      {
        path: 'checkbox',
        component: CheckboxPageComponent,
      },
      {
        path: 'datepicker',
        component: DatepickerPageComponent,
      },
      {
        path: 'dropdown',
        component: DropdownPageComponent,
      },
      {
        path: 'grid',
        component: GridPageComponent,
      },
      {
        path: 'input',
        component: InputPageComponent,
      },
      {
        path: 'select',
        component: SelectPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
