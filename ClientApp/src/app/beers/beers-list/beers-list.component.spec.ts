
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerDetailsComponent } from '../beer-details/beer-details.component';
import { BeersService } from '../beers.service';
import { BeersListComponent } from './beers-list.component';

describe('BeersListComponent', () => {
  let component: BeersListComponent;
  let fixture: ComponentFixture<BeersListComponent>;
  class mockBeerService {
    plunkAPIRootUrl: ""
    getBeerById() { }
    getBeersByPage() { 
      return Promise.resolve([{
        id:"1",
        name: 'beer1', 
        tagline: "test tagline",
        abv: 'test abv'
      }
    ])}
    searchBeers() {
      return Promise.resolve([{
          id:"1", 
          name: 'beer1', 
          tagline: "test tagline",
          abv: 'test abv'
        }
      ]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgbPaginationModule ],
      declarations: [ BeersListComponent , BeerDetailsComponent],
      providers: [
        { provide: BeersService, useClass: mockBeerService }]      
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the pagination related variables on init', () => {
    component.ngOnInit();
    expect(component.pageSize).toBe(10);
    // expect(component.searchString).toBe('');
    expect(component.totalBeers).toBe(0);
    // expect(component.activeBeerId).toBe(0);
  });

  it('should update the active beer Id prop on click on view link', () => {
    component.onView(2);    
    // expect(component.activeBeerId).toBe(2);
  });

  it('should update the active beer Id prop on click on view link', () => {
    component.ngOnInit();
    spyOnAllFunctions(mockBeerService);
    expect(mockBeerService.prototype.getBeersByPage).toHaveBeenCalled();
  });

  it('should update the active beer Id prop on click on view link', () => {
    component.ngOnInit();
    spyOnAllFunctions(mockBeerService);
    expect(mockBeerService.prototype.getBeersByPage).toHaveBeenCalled();
  });

});
