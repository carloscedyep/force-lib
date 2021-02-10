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

@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
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
    CheckboxComponent
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
