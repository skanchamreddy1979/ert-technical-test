
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerDetailsComponent } from '../beer-details/beer-details.component';
import { BeersService } from '../beers.service';
import { BeersListComponent } from './beers-list.component';

describe('BeersListComponent', () => {
  let component: BeersListComponent;
  let fixture: ComponentFixture<BeersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, NgbPaginationModule ],
      declarations: [ BeersListComponent , BeerDetailsComponent],
      providers: []
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the page change event on page change', () => {
    const pageChangeSpy = spyOn(component.pageChange, 'emit');
    component.onPageChange();
    expect(pageChangeSpy).toHaveBeenCalledTimes(1);
  });

  it('should view emit the event on view', () => {
    const viewSpy = spyOn(component.view, 'emit');
    const mockBeerId = 1;
    component.onView(mockBeerId);
    expect(viewSpy).toHaveBeenCalledTimes(1);
    expect(viewSpy).toHaveBeenCalledWith(mockBeerId);
  });

  it('should emit the search event on search', () => {
    const serachSpy = spyOn(component.search, 'emit');
    component.onSearch();
    expect(serachSpy).toHaveBeenCalledTimes(1);
    expect(serachSpy).toHaveBeenCalledWith(component.searchString);
    // should reset the page number to 1 on search
    expect(component.pageNumber).toBe(1);
  });

});
