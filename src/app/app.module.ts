import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessaosupermecadoComponent } from './sessaosupermecado/sessaosupermecado.component';

@NgModule({
  declarations: [
    AppComponent,
    SessaosupermecadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
