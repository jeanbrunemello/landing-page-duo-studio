import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoServiceService } from 'src/app/services/catalogo-service.service';

@Component({
  selector: 'app-catalogo-documentos',
  templateUrl: './catalogo-documentos.component.html',
  styleUrls: ['./catalogo-documentos.component.scss']
})
export class CatalogoDocumentosComponent implements OnInit {
  catalogos: any = [];
  activatedRouteId: string | null = ""
  constructor(private catalogoService: CatalogoServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCatalogoById()
  }

  getActiveRoute() {
    this.activatedRouteId = this.activatedRoute.snapshot.paramMap.get("id")
  }

  getCatalogoById() {
    this.getActiveRoute();
    this.catalogoService.getCatalogoById(parseInt(this.activatedRouteId!)).subscribe((resposta) => {
      this.catalogos = [];
      this.catalogos.push(resposta)
      console.log(this.catalogos)
    })
  }
}
