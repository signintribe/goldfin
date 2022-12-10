import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmoComponent } from './cmo.component';

describe('CmoComponent', () => {
  let component: CmoComponent;
  let fixture: ComponentFixture<CmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
