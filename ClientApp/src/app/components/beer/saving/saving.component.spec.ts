import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatToolbarModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { InternalBeerService } from 'src/app/services/internalBeer.service';
import { MaterialModule } from 'src/app/shared/material.module';

import { SavingComponent } from "./saving.component";

describe('SavingComponent', () => {
  let component: SavingComponent;
  let fixture: ComponentFixture<SavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavingComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        MaterialModule,
        MatCardModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        ReactiveFormsModule,
        RouterModule ],
        providers: [InternalBeerService]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SavingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
