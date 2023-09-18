import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoServiceService } from 'src/app/services/catalogo-service.service';

@Component({
  selector: 'app-catalogo-lista',
  templateUrl: './catalogo-lista.component.html',
  styleUrls: ['./catalogo-lista.component.scss']
})
export class CatalogoListaComponent {
  catalogos: any = [];
  activatedRouteId: string | null = ""
  documentoId: string = "";
  constructor(private catalogoService: CatalogoServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCatalogoById();
    
  }

  getActiveRoute() {
    this.activatedRouteId = this.activatedRoute.snapshot.paramMap.get("id")
    this.activatedRoute.params.subscribe(params => {
      const documentoId = params['documentoId'];
      this.documentoId = documentoId
    });
  }

  getCatalogoById() {
    this.getActiveRoute();
    this.catalogoService.getCatalogoById(parseInt(this.activatedRouteId!)).subscribe((resposta) => {
      this.catalogos = [];
      this.catalogos.push(resposta)
    })
  }
}
