import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewdogbeerlistComponent } from './brewdogbeerlist.component';
import { BrewdogserService } from '../brewdogser.service';

describe('BrewdogbeerlistComponent', () => {
  let component: BrewdogbeerlistComponent;
  let fixture: ComponentFixture<BrewdogbeerlistComponent>;
  let service : BrewdogserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewdogbeerlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewdogbeerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get beer list', () => {
    let component = new BrewdogbeerlistComponent(service);
    component.ngOnInit();
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should search beer ', () => {
    let component = new BrewdogbeerlistComponent(service);
    component.Search();
    expect(component.Search).toBeTruthy();
  });
});
