import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { ListComponent } from './list.component';
import { BeersService } from '../services/beers.service';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let beersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    beersService = TestBed.get(BeersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call viewinit method', () => {
    component.ngAfterViewInit();
    expect(component).toBeTruthy();
  });

  it('should bind list', async(()  => {
    const mockResponse = [
      {id: 1, name: 'Buzz', tagline: 'A Real Bitter Experience.', first_brewed: '09/2007'}
    ];
    spyOn(beersService, 'Get').and.returnValue(of(mockResponse));
    component.filterData('');
    component.bindData(mockResponse);
    expect(component).toBeTruthy();
    expect(mockResponse.length).toBe(1);
  }));

  it('should call dialog', async(() => {
    const mockResponse = [
      {id: 1, name: 'Buzz', tagline: 'A Real Bitter Experience.', first_brewed: '09/2007'}
    ];
    spyOn(beersService, 'GetById').and.returnValue(of(mockResponse));
    component.openPopup(1);
    component.bindData('');
    expect(component).toBeTruthy();
  }));

  it('should destroy', () => {
    component.ngOnDestroy();
    expect(component).toBeTruthy();
  });
});
