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
  const data = [{ column: 'column value 1', description: 'description1' }, { column: 'column value 2', description: 'description2' }];
  const columns = [{ key: 'column', text: 'Column' }];

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
      const rows: HTMLElement[] = fixture.nativeElement.querySelectorAll('table tbody tr');

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
        const expandedRows: HTMLElement[] = wrapperFixture.nativeElement.querySelectorAll('table tbody tr.expaned-row');
        expect(expandedRows.length).toEqual(0);

        const rows: HTMLElement[] = wrapperFixture.nativeElement.querySelectorAll('table tbody tr');
        expect(rows.length).toEqual(data.length * 2);
      });
    });

    it('should expand a row with details when the is clicked', () => {
      wrapperFixture.whenStable().then(() => {
        const clickSpy = spyOn(component, 'onRowClick');
        const row: HTMLElement = wrapperFixture.nativeElement.querySelector('table tbody tr.expaned-row');
        expect(row).toBeNull();

        row.click();
        wrapperFixture.detectChanges();

        expect(clickSpy).toHaveBeenCalled();
        expect(row.classList.contains('expaned-row')).toBeTruthy();
      });
    });
  });
});
