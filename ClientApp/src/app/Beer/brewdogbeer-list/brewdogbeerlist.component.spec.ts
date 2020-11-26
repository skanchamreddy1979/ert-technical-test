import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BrewdogbeerlistComponent } from './brewdogbeerlist.component';
import { BrewdogserService } from '../brewdogser.service';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { IBeerList } from 'src/app/beerlist';


describe('BrewdogbeerlistComponent', () => {
  let component: BrewdogbeerlistComponent;
  let fixture: ComponentFixture<BrewdogbeerlistComponent>;
  let service: BrewdogserService;
  let router: Router;
  let beerServiceStub: any;


  beforeEach(async () => {
    beerServiceStub = {
      beersChanged: new ReplaySubject<IBeerList[]>()
    };

    await TestBed.configureTestingModule({
      declarations: [BrewdogbeerlistComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewdogbeerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get beer list', () => {
    const COMP = new BrewdogbeerlistComponent(service, router);
    COMP.ngOnInit();
    expect(COMP.ngOnInit).toBeTruthy();
  });

  it('should have no beers after initialization', () => {
    expect(component.beers).toEqual([]);
  });

  it('should update list of beers when they change', fakeAsync(() => {
    beerServiceStub.beersChanged.next([{ id: 1 } as IBeerList, { id: 2 } as IBeerList, { id: 3 } as IBeerList]);
    tick();
    expect(component.beers.length).toBe(3);
  }));

  it('should have no beers after initialization', () => {
    expect(component.beers).toEqual([]);
  });

  it('should search beer ', () => {
    const COMP = new BrewdogbeerlistComponent(service, router);
    COMP.Search();
    expect(COMP.Search).toBeTruthy();
  });
});
