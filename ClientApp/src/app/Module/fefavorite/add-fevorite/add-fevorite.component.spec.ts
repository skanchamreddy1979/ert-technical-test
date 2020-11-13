import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFevoriteComponent } from './add-fevorite.component';

describe('AddFevoriteComponent', () => {
  let component: AddFevoriteComponent;
  let fixture: ComponentFixture<AddFevoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFevoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFevoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
