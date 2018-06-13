import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupblicZoneComponent } from './pupblic-zone.component';

describe('PupblicZoneComponent', () => {
  let component: PupblicZoneComponent;
  let fixture: ComponentFixture<PupblicZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupblicZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupblicZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
