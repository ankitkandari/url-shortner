import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URLEditorComponent } from './urleditor.component';

describe('URLEditorComponent', () => {
  let component: URLEditorComponent;
  let fixture: ComponentFixture<URLEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [URLEditorComponent]
    });
    fixture = TestBed.createComponent(URLEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
