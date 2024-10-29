import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPagesComponent } from './perfil-pages.component';

describe('PerfilPagesComponent', () => {
  let component: PerfilPagesComponent;
  let fixture: ComponentFixture<PerfilPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPagesComponent]
    });
    fixture = TestBed.createComponent(PerfilPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
