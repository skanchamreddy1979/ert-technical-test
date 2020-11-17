import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrewDogBeersComponent } from './brew-dog-beers.component';
import { AppModule } from 'src/app/app.module';

describe('BrewDogBeersComponent', () => {
  let component: BrewDogBeersComponent;
  let fixture: ComponentFixture<BrewDogBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      imports: [
        AppModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewDogBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show search', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="search"]')
    ).toBeTruthy();
  });
  it('should show BrewDog Beers', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="title_name"]').innerText
    ).toEqual('BrewDog Beers');
  });
  it('should show search', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="toolbar"]')
    ).toBeTruthy();
  });
  it('should show table', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="tableData"]')
    ).toBeTruthy();
  });
  it('should show name header', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="nameheader"]').innerText
    ).toEqual('Name');
  });
  it('should show name row data', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="namedata"]')
    ).toBeTruthy();
  });
  it('should show tagline header', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="taglineheader"]')
        .innerText
    ).toEqual('Tag Line');
  });
  it('should show tagline row data', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="taglinedata"]')
    ).toBeTruthy();
  });
  it('should show abv header', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="abvheader"]').innerText
    ).toEqual('ABV');
  });
  it('should show abv row data', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="abvdata"]')
    ).toBeTruthy();
  });
  it('should show firstbrewed header', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="firstbrewedheader"]')
        .innerText
    ).toEqual('First Brewed');
  });
  it('should show firstbrewed row data', () => {
    expect(
      fixture.nativeElement.querySelectorAll('[data-test="firstbreweddata"]')
    ).toBeTruthy();
  });
});
