import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveEditViewerComponent } from './live-edit-viewer.component';

describe('LiveEditViewerComponent', () => {
  let component: LiveEditViewerComponent;
  let fixture: ComponentFixture<LiveEditViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveEditViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveEditViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
