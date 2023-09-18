import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoServiceService } from 'src/app/services/catalogo-service.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  catalogos: any = [];
  catalogoById = new Object;
  activatedRouteId: string | null = ""
  constructor(private catalogoService: CatalogoServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCatalogos();
    //this.route.snapshot()

  }

  getActiveRoute() {
    this.activatedRouteId = this.activatedRoute.snapshot.paramMap.get("id")
    console.log(this.activatedRouteId)
  }

  getCatalogos() {
    this.catalogoService.getAllCatalogos().subscribe((response) => {
      this.catalogos = response
      console.log(this.catalogos)
    })
  }

  getCatalogoById() {
      this.getActiveRoute();
      this.catalogoService.getCatalogoById(parseInt(this.activatedRouteId!)).subscribe((resposta) => {
        this.catalogos = [];
        this.catalogos.push(resposta)
      })
  }
}
