import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {CdkTableModule, DataSource} from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<DataType> extends DataSource<DataType> implements OnInit {

  @Input() public dataSource!: DataType | Observable<DataType>;
  @Input() public columns!: string[];

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  
  connect(collectionViewer: CollectionViewer): Observable<readonly DataType[]> {
    throw new Error('Method not implemented.');
  }
  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error('Method not implemented.');
  }

}
