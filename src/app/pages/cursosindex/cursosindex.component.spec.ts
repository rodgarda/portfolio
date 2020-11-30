import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosindexComponent } from './cursosindex.component';

describe('CursosindexComponent', () => {
  let component: CursosindexComponent;
  let fixture: ComponentFixture<CursosindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
