import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaMovimientoComponent } from './captura-movimiento.component';

describe('CapturaMovimientoComponent', () => {
  let component: CapturaMovimientoComponent;
  let fixture: ComponentFixture<CapturaMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturaMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
