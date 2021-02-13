import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from './force-lib/pipes/date.pipe';
import { DigitDirective } from './force-lib/directives/digit.directive';
import { NavbarComponent } from './force-lib/controls/containers/navbar/navbar.component';
import { IndiceComponent } from './pages/indice/indice.component';
import { ChipComponent } from './force-lib/controls/commons/chip/chip.component';
import { ButtonComponent } from './force-lib/controls/buttons/button/button.component';
import { SetupPageComponent } from './pages/configuration/setup-page/setup-page.component';
import { ButtonPageComponent } from './pages/controls/buttons/button-page/button-page.component';
import { SeparatorComponent } from './force-lib/controls/commons/separator/separator.component';
import { TabComponent } from './force-lib/controls/containers/tabs/tab/tab.component';
import { TabItemComponent } from './force-lib/controls/containers/tabs/tab-item/tab-item.component';
import { TabLabelComponent } from './force-lib/controls/containers/tabs/tab-label/tab-label.component';
import { TabBodyComponent } from './force-lib/controls/containers/tabs/tab-body/tab-body.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './force-lib/controls/inputs/checkbox/checkbox.component';
import { InputPageComponent } from './pages/controls/inputs/input-page/input-page.component';
import { InputComponent } from './force-lib/controls/inputs/input/input.component';
import { CheckboxPageComponent } from './pages/controls/inputs/checkbox-page/checkbox-page.component';
import { DatepickerPageComponent } from './pages/controls/inputs/datepicker-page/datepicker-page.component';
import { DatepickerComponent } from './force-lib/controls/inputs/datepicker/datepicker.component';
import { CalendarComponent } from './force-lib/controls/commons/calendar/calendar.component';
import { ButtongroupPageComponent } from './pages/controls/buttons/buttongroup-page/buttongroup-page.component';
import { ButtonGroupComponent } from './force-lib/controls/buttons/button-group/button-group.component';
import { DropdownBodyComponent } from './force-lib/controls/containers/dropdown/dropdown-body/dropdown-body.component';
import { DropdownItemComponent } from './force-lib/controls/containers/dropdown/dropdown-item/dropdown-item.component';
import { DropdownLabelComponent } from './force-lib/controls/containers/dropdown/dropdown-label/dropdown-label.component';
import { DropdownComponent } from './force-lib/controls/containers/dropdown/dropdown/dropdown.component';
import { DropdownPageComponent } from './pages/controls/containers/dropdown-page/dropdown-page.component';
import { LinkComponent } from './force-lib/controls/buttons/link/link.component';
import { CodeItemComponent } from './force-lib/controls/containers/code/code-item/code-item.component';
import { CodeLabelComponent } from './force-lib/controls/containers/code/code-label/code-label.component';
import { CodeBodyComponent } from './force-lib/controls/containers/code/code-body/code-body.component';
import { CodeComponent } from './force-lib/controls/containers/code/code/code.component';
import { CodePipe } from './force-lib/pipes/code.pipe';
import { AccordionComponent } from './force-lib/controls/containers/accordion/accordion/accordion.component';
import { AccordionItemComponent } from './force-lib/controls/containers/accordion/accordion-item/accordion-item.component';
import { AccordionLabelComponent } from './force-lib/controls/containers/accordion/accordion-label/accordion-label.component';
import { AccordionBodyComponent } from './force-lib/controls/containers/accordion/accordion-body/accordion-body.component';
import { GridPageComponent } from './pages/controls/commons/grid-page/grid-page.component';
import { SelectComponent } from './force-lib/controls/inputs/select/select.component';
import { SelectPageComponent } from './pages/controls/inputs/select-page/select-page.component';
import { FilterPipe } from './force-lib/pipes/filter.pipe';
import { AccordionPageComponent } from './pages/controls/containers/accordion-page/accordion-page.component';
import { SidebarComponent } from './force-lib/controls/containers/sidebar/sidebar/sidebar.component';
import { SidebarItemComponent } from './force-lib/controls/containers/sidebar/sidebar-item/sidebar-item.component';
import { SidebarBodyComponent } from './force-lib/controls/containers/sidebar/sidebar-body/sidebar-body.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
    CodePipe,
    FilterPipe,
    DigitDirective,
    NavbarComponent,
    IndiceComponent,
    ChipComponent,
    ButtonComponent,
    SetupPageComponent,
    ButtonPageComponent,
    SeparatorComponent,
    TabComponent,
    TabItemComponent,
    TabLabelComponent,
    TabBodyComponent,
    CheckboxComponent,
    InputPageComponent,
    InputComponent,
    CheckboxPageComponent,
    DatepickerPageComponent,
    DatepickerComponent,
    CalendarComponent,
    ButtongroupPageComponent,
    ButtonGroupComponent,
    DropdownComponent,
    DropdownItemComponent,
    DropdownLabelComponent,
    DropdownBodyComponent,
    DropdownPageComponent,
    LinkComponent,
    CodeComponent,
    CodeItemComponent,
    CodeLabelComponent,
    CodeBodyComponent,
    AccordionComponent,
    AccordionItemComponent,
    AccordionLabelComponent,
    AccordionBodyComponent,
    GridPageComponent,
    SelectComponent,
    SelectPageComponent,
    AccordionPageComponent,
    SidebarComponent,
    SidebarItemComponent,
    SidebarBodyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
