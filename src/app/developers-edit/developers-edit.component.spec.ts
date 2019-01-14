import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersEditComponent } from './developers-edit.component';

describe('DevelopersEditComponent', () => {
  let component: DevelopersEditComponent;
  let fixture: ComponentFixture<DevelopersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
