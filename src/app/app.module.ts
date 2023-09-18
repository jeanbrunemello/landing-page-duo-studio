import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogoDocumentosComponent } from './components/catalogo-documentos/catalogo-documentos.component';
import { CatalogoListaComponent } from './components/catalogo-lista/catalogo-lista.component';
import { MateriaisComponent } from './pages/materiais/materiais.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CatalogoComponent,
    CatalogoDocumentosComponent,
    CatalogoListaComponent,
    MateriaisComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
