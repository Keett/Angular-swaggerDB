import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenemeilkComponent } from './denemeilk.component';

describe('DenemeilkComponent', () => {
  let component: DenemeilkComponent;
  let fixture: ComponentFixture<DenemeilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenemeilkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenemeilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
