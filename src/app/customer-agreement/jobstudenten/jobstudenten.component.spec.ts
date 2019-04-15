import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobstudentenComponent } from './jobstudenten.component';

describe('JobstudentenComponent', () => {
  let component: JobstudentenComponent;
  let fixture: ComponentFixture<JobstudentenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobstudentenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobstudentenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
