import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatToolbarModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BeerService } from 'src/app/services/beer.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { SavingComponent } from '../saving/saving.component';
import { SearchComponent } from '../search/search.component';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent, SearchComponent, SavingComponent ],
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
        providers: [BeerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
