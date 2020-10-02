import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { Beer } from '../../models/beer.model';
import { HttpClientService } from '../../shared/services/httpclient.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BeerService } from '../../services/beer.service';
import { BeerListComponent } from './beer-list.component';
import { MatTableDataSource } from '@angular/material/table';


describe('BeerListComponent', () => {
    let component: BeerListComponent;
    let fixture: ComponentFixture<BeerListComponent>;
    let httpClient: HttpClient;
    let beerService: BeerService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerListComponent],
            imports: [FormsModule, HttpClientModule,
                CommonModule,
                RouterModule.forRoot([]),
                BrowserAnimationsModule,
                MatDialogModule
            ],
            providers: [BeerService, HttpClientService,
              { provide: MAT_DIALOG_DATA, useValue: {} },
     { provide: MatDialogRef, useValue: {} }
          ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerListComponent);
        component = fixture.componentInstance;
        httpClient = TestBed.get(HttpClient);
        beerService = TestBed.get(BeerService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should get list', () => {
        let mockResponse: Beer[] = [
            { id: 0, name: '', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }
        ];

        spyOn(beerService, 'getBeers').and.returnValue(of(mockResponse));
        component.bindDatasource(mockResponse);
        component.getFilterData(0);
        component.dataSource =  new MatTableDataSource(mockResponse);
        expect(component.dataSource.data[0]).toEqual(mockResponse[0]);
        component.ngOnDestroy();
    });
    it('should be empty list', () => {
        let mockResponse: Beer[] = [];
        spyOn(beerService, 'getBeers').and.returnValue(of(mockResponse));
        component.bindDatasource(mockResponse);
        component.dataSource =  new MatTableDataSource(mockResponse);
        component.getFilterData(1);
        expect(component.dataSource.data.length).toEqual(0);
        component.ngOnDestroy();
    });
});
