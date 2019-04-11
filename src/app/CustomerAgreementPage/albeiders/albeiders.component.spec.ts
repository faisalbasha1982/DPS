import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbeidersComponent } from './albeiders.component';

describe('AlbeidersComponent', () => {
  let component: AlbeidersComponent;
  let fixture: ComponentFixture<AlbeidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbeidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbeidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
