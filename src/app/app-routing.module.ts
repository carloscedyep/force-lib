import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupPageComponent } from './pages/configuration/setup-page/setup-page.component';
import { ButtonPageComponent } from './pages/controls/buttons/button-page/button-page.component';
import { IndiceComponent } from './pages/indice/indice.component';

const routes: Routes = [
  { path: '', redirectTo: 'indice', pathMatch: 'full'},
  { path: 'indice', component: IndiceComponent,
    children: [
      {
        path: 'setup', component: SetupPageComponent
      },
      {
        path: 'button', component: ButtonPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
