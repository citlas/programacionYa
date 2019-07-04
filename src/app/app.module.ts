import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadoComponent } from './dado/dado.component';
import { DadoEj9Component } from './dado-ej9/dado-ej9.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';
import { ElementosModule } from './elementos/elementos.module';

@NgModule({
  declarations: [
    AppComponent,
    DadoComponent,
    DadoEj9Component,
    CronometroComponent,
    SelectornumericoComponent,
    ListadoarticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ElementosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
