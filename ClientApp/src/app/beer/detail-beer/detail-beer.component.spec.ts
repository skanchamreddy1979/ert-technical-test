import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DetailBeerComponent } from './detail-beer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PunkAPIService } from 'src/app/shared/punk-api.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
        HttpClientTestingModule, RouterModule.forRoot([])
      ],
      providers: [
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

  it('should return get beers by id ', fakeAsync(() => {
    const injmockBeerService = fixture.debugElement.injector.get(PunkAPIService);
    spyOn(injmockBeerService, 'getBeerbyId').and.callFake(() => {
      return of(mockBeer).pipe(delay(300));
    });

    component.getDetailBeer();
    tick(300);

    expect(component).toBeTruthy();
  }));

});
