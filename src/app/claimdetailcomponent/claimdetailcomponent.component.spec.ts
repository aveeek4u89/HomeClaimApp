import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimdetailcomponentComponent } from './claimdetailcomponent.component';

describe('ClaimdetailcomponentComponent', () => {
  let component: ClaimdetailcomponentComponent;
  let fixture: ComponentFixture<ClaimdetailcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimdetailcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimdetailcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
