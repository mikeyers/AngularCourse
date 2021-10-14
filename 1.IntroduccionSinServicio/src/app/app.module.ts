import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

// Es el módulo principal
@NgModule({
  declarations: [ // aqui se añaden los componentes para poder usarlos en el html 
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule, //Esto lo importo porque desde el app.module tengo la <app-listado> en heroes y asi puedo acceder
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
