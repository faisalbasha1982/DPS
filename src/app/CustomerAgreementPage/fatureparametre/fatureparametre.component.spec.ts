import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatureparametreComponent } from './fatureparametre.component';

describe('FatureparametreComponent', () => {
  let component: FatureparametreComponent;
  let fixture: ComponentFixture<FatureparametreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatureparametreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatureparametreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
