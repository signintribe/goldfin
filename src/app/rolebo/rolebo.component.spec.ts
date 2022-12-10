import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleboComponent } from './rolebo.component';

describe('RoleboComponent', () => {
  let component: RoleboComponent;
  let fixture: ComponentFixture<RoleboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
