import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URLReaderComponent } from './urlreader.component';

describe('URLReaderComponent', () => {
  let component: URLReaderComponent;
  let fixture: ComponentFixture<URLReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [URLReaderComponent]
    });
    fixture = TestBed.createComponent(URLReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
