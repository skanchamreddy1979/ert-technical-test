import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavouriteModalComponent } from './add-favourite-modal.component';

describe('AddFavouriteModalComponent', () => {
  let component: AddFavouriteModalComponent;
  let fixture: ComponentFixture<AddFavouriteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavouriteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavouriteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
