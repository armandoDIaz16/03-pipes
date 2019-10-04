import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// Pipes
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';



// FECHAS EN ESPAÑOL
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ShowPasswordPipe } from './pipes/show-password.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    ShowPasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ {
     provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
