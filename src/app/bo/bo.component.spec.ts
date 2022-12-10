import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoComponent } from './bo.component';

describe('BoComponent', () => {
  let component: BoComponent;
  let fixture: ComponentFixture<BoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
