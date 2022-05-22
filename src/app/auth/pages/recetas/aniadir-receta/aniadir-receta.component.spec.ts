import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirRecetaComponent } from './aniadir-receta.component';

describe('AniadirRecetaComponent', () => {
  let component: AniadirRecetaComponent;
  let fixture: ComponentFixture<AniadirRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniadirRecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AniadirRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
