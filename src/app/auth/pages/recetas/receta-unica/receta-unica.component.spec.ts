import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaUnicaComponent } from './receta-unica.component';

describe('RecetaUnicaComponent', () => {
  let component: RecetaUnicaComponent;
  let fixture: ComponentFixture<RecetaUnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetaUnicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
