import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadPagesComponent } from './facultad-pages.component';

describe('FacultadPagesComponent', () => {
  let component: FacultadPagesComponent;
  let fixture: ComponentFixture<FacultadPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultadPagesComponent]
    });
    fixture = TestBed.createComponent(FacultadPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
