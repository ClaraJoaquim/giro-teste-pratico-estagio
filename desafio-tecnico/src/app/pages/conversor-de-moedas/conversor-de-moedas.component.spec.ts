import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorDeMoedasComponent } from './conversor-de-moedas.component';

describe('ConversorDeMoedasComponent', () => {
  let component: ConversorDeMoedasComponent;
  let fixture: ComponentFixture<ConversorDeMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversorDeMoedasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorDeMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
