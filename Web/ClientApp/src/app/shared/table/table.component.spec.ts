import {
  async,
  ComponentFixture,
  TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../material.module';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let data = [{ column: 'column value 1', description: 'description1' }, { column: 'column value 2', description: 'description2' }];
  let columns = [{ key: 'column', text: 'Column' }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent,
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
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
});
