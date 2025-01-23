import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEcomerceComponent } from './home-ecomerce.component';

describe('HomeEcomerceComponent', () => {
  let component: HomeEcomerceComponent;
  let fixture: ComponentFixture<HomeEcomerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEcomerceComponent]
    });
    fixture = TestBed.createComponent(HomeEcomerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
