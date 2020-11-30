import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { BeersService } from '../services/beers-service';
import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let beersService: BeersService;
  beforeEach(async(() => {
    const mockDialogRef = {
      close: jasmine.createSpy('close')
    };
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    sessionStorage.setItem('beerId', '1');
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    beersService = TestBed.get(BeersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call oninit method', () => {
    component.ngOnInit();
    spyOn(beersService, 'getBeerList');
    expect(component).toBeTruthy();
  });

  it('should have title: Beer Details', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    expect(title.nativeElement.textContent).toEqual('Beer Details');
  });

});
