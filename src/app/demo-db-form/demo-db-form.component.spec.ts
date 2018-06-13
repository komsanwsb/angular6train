import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDbFormComponent } from './demo-db-form.component';

describe('DemoDbFormComponent', () => {
  let component: DemoDbFormComponent;
  let fixture: ComponentFixture<DemoDbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
