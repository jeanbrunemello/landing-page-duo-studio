import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoDocumentosComponent } from './catalogo-documentos.component';

describe('CatalogoDocumentosComponent', () => {
  let component: CatalogoDocumentosComponent;
  let fixture: ComponentFixture<CatalogoDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogoDocumentosComponent]
    });
    fixture = TestBed.createComponent(CatalogoDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
