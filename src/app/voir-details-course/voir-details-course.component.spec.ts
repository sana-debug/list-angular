import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirDetailsCourseComponent } from './voir-details-course.component';

describe('VoirDetailsCourseComponent', () => {
  let component: VoirDetailsCourseComponent;
  let fixture: ComponentFixture<VoirDetailsCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirDetailsCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirDetailsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
