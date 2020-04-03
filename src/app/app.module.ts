import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InformacionComponent } from './informacion/informacion.component';
import { LibroclickedService } from './libroclicked.service';

const rutas: Routes = [
  {path: 'listado-libros', component: LibrosComponent },
  {path: 'informacion/:libroId', component: InformacionComponent },
  {path: 'informacion', redirectTo: '/' },

  {path: '404', component: NotFoundComponent },
  {path: '', component: InicioComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    LibrosComponent,
    CabeceraComponent,
    InicioComponent,
    NotFoundComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
