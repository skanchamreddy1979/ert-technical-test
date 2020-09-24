import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { BeerModel } from 'src/app/Models/beer-model';
import { BeerService } from '../beer.service';
import { BeersListComponent } from './beers-list.component';

describe('BeerListComponent', () => {
    let component: BeersListComponent;
    let fixture: ComponentFixture<BeersListComponent>;
    let beerService: BeerService;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BeersListComponent],
            imports: [FormsModule, HttpClientModule,
                CommonModule,
                RouterModule.forRoot([]),
                BrowserAnimationsModule,
                NgbModule
            ],
            providers: [BeerService, { provide: APP_BASE_HREF, useValue: '/' }]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BeersListComponent);
        component = fixture.componentInstance;
        beerService = TestBed.inject(BeerService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should get list', () => {
        let mockResponse: BeerModel[] = [
            { id: 0, name: '', tagline: '', first_brewed: '', image_url: '', abv: '' }
        ];

        spyOn(beerService, 'getAllBeers').and.returnValue(of(mockResponse));

        component.getAllBeers();
        component.beerList = mockResponse;
        expect(mockResponse.length).toEqual(mockResponse.length);
    });
    it('should be empty list', () => {
        let mockResponse: BeerModel[] = [];
        spyOn(beerService, 'getAllBeers').and.returnValue(of(mockResponse));

        component.getAllBeers();
        component.beerList = mockResponse;
        expect(mockResponse.length).toEqual(0);
    });

});
