import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettaComponent } from './petta.component';

describe('PettaComponent', () => {
  let component: PettaComponent;
  let fixture: ComponentFixture<PettaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
