import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu, 'ru');

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { AclDirective } from './components/header/acl.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaruselComponent,
    AclDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
