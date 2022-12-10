import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmoAddUserComponent } from './cmo-add-user.component';

describe('CmoAddUserComponent', () => {
  let component: CmoAddUserComponent;
  let fixture: ComponentFixture<CmoAddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmoAddUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmoAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
