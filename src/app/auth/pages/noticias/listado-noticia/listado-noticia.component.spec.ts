import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoticiaComponent } from './listado-noticia.component';

describe('ListadoNoticiaComponent', () => {
  let component: ListadoNoticiaComponent;
  let fixture: ComponentFixture<ListadoNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
