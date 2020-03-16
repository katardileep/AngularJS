import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettainfoComponent } from './pettainfo.component';

describe('PettainfoComponent', () => {
  let component: PettainfoComponent;
  let fixture: ComponentFixture<PettainfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettainfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
