import {
  async,
  ComponentFixture,
  TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import { TableComponent } from './table.component';
import { WrapperComponent } from './testing/wrapper/wrapper-component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let data = [{ column: 'column value 1', description: 'description1' }, { column: 'column value 2', description: 'description2' }];
  let columns = [{ key: 'column', text: 'Column' }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
        WrapperComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render rows', () => {
    component.data = data;
    component.columns = columns;

    fixture.whenStable().then(() => {
      let rows: HTMLElement[] = fixture.nativeElement.querySelectorAll('table tbody tr');

      expect(rows).toBeTruthy();
      expect(rows.length).toEqual(data.length);
    });
  });

  describe('Wrapping tests', () => {
    let wrapperFixture: ComponentFixture<WrapperComponent>;
    let wrapperComponent: WrapperComponent;

    beforeEach(() => {
      wrapperFixture = TestBed.createComponent(WrapperComponent);
      wrapperComponent = wrapperFixture.componentInstance;
      component = wrapperComponent.table;
      wrapperComponent.data = data;
      wrapperComponent.columns = columns;
      wrapperFixture.detectChanges();
    });

    it('should render row for displaying details', () => {
      wrapperFixture.whenStable().then(() => {
        let expandedRows: HTMLElement[] = wrapperFixture.nativeElement.querySelectorAll('table tbody tr.expaned-row');
        expect(expandedRows.length).toEqual(0);
  
        let rows: HTMLElement[] = wrapperFixture.nativeElement.querySelectorAll('table tbody tr');
        expect(rows.length).toEqual(data.length * 2);
      });
    });

    it('should expand a row with details when the is clicked', () => {
      wrapperFixture.whenStable().then(() => {
        let clickSpy = spyOn(component, 'onRowClick');
        let row: HTMLElement = wrapperFixture.nativeElement.querySelector('table tbody tr.expaned-row');
        expect(row).toBeNull();
  
        row.click();
        wrapperFixture.detectChanges();
  
        expect(clickSpy).toHaveBeenCalled();
        expect(row.classList.contains('expaned-row')).toBeTruthy();
      });
    });
  });
});
