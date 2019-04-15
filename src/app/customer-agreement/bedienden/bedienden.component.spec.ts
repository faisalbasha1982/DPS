import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BediendenComponent } from './bedienden.component';

describe('BediendenComponent', () => {
  let component: BediendenComponent;
  let fixture: ComponentFixture<BediendenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BediendenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BediendenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
