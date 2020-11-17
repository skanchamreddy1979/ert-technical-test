import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerWelcomeComponent } from './beer-welcome.component';

describe('BeerWelcomeComponent', () => {
  let component: BeerWelcomeComponent;
  let fixture: ComponentFixture<BeerWelcomeComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        BeerWelcomeComponent
      ],
    }).compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
