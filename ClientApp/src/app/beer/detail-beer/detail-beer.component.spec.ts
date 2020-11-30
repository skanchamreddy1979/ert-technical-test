import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBeerComponent } from './detail-beer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PunkAPIService } from 'src/app/shared/punk-api.service';

describe('DetailBeerComponent', () => {
  let component: DetailBeerComponent;
  let fixture: ComponentFixture<DetailBeerComponent>;
  let mockBeerService;
  let mockBeer;

  beforeEach(async(() => {
    mockBeer = { id: '1 ', name: 'beer 1 ', description: 'descp01', abv: '1', tagLine: '_', imgUrl: './abc', firstBrewed: new Date() };
    mockBeerService = jasmine.createSpyObj(['getBeer']);

    TestBed.configureTestingModule({
      declarations: [DetailBeerComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [
        { provide: PunkAPIService, useValue: mockBeerService },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => 1 } } } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DetailBeerComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
