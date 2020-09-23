import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';


describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            MatToolbarModule,
            RouterModule.forRoot([])
          ],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
