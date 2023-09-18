import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CatalogoDocumentosComponent } from './components/catalogo-documentos/catalogo-documentos.component';
import { CatalogoListaComponent } from './components/catalogo-lista/catalogo-lista.component';
import { MateriaisComponent } from './pages/materiais/materiais.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'catalogos',
    component: MateriaisComponent,
    children: [
      {
        path: 'exibir',
        component: CatalogoComponent,
      },
      {
        path: "exibir/:id",
        component: CatalogoDocumentosComponent,
      },
      {
        path: 'exibir/:id/documentos/:documentoId',
        component: CatalogoListaComponent,
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
