import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientosComponent } from './reconocimientos.component';

describe('ReconocimientosComponent', () => {
  let component: ReconocimientosComponent;
  let fixture: ComponentFixture<ReconocimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconocimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
