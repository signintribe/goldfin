import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLafComponent } from './new-laf.component';

describe('NewLafComponent', () => {
  let component: NewLafComponent;
  let fixture: ComponentFixture<NewLafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
