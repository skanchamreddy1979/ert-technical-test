import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BeerDetailsComponent } from './beer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BeerService } from 'src/app/shared/beer.service';
import { of } from 'rxjs';
import { BeerModel } from 'src/app/shared/models/beer.model';
import { TestData } from 'src/app/shared/testData';
const mockResponse: BeerModel[] = TestData.getBeerTByIdestData();

describe('BeerDetailsComponent', () => {
    let component: BeerDetailsComponent;
    let fixture: ComponentFixture<BeerDetailsComponent>;
    let beerService: BeerService;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BeerDetailsComponent],
            imports: [
                HttpClientModule,
                RouterModule.forRoot([])
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerDetailsComponent);
        component = fixture.componentInstance;
        beerService = TestBed.inject(BeerService);
        fixture.detectChanges();

    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show beer details', () => {
        expect(fixture.nativeElement.querySelector('[id="beer-details"]')).toBeTruthy();
    });

    it('should call intialize Get Beer Details method', waitForAsync(() => {
        spyOn(beerService, 'getBeerDetails').and.returnValue(of(mockResponse[0]));
        component.getBeerDetails();
        expect(mockResponse.length).toEqual(1);
    }));

    it('should call intialize Get Beer Details method with no data', waitForAsync(() => {
        const tempMockData: BeerModel = {} as BeerModel;
        spyOn(beerService, 'getBeerDetails').withArgs(8).and.returnValue(of(tempMockData));
        component.getBeerDetails();
        expect(tempMockData.name).toEqual(null);
    }));


});
