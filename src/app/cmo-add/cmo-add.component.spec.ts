import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmoAddComponent } from './cmo-add.component';

describe('CmoAddComponent', () => {
  let component: CmoAddComponent;
  let fixture: ComponentFixture<CmoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
