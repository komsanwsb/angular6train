import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDbListComponent } from './demo-db-list.component';

describe('DemoDbListComponent', () => {
  let component: DemoDbListComponent;
  let fixture: ComponentFixture<DemoDbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
