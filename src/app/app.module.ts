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

@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
    CodePipe,    
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
