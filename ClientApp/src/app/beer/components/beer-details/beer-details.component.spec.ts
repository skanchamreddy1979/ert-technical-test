import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailsComponent } from './beer-details.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { MatDialogRef } from '@angular/material/dialog';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;
  beforeEach(async(() => {
    const mockDialogRef = {
      close: jasmine.createSpy('close')
    };
  
    TestBed.configureTestingModule({
      declarations: [ BeerDetailsComponent, MaterialModule ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
