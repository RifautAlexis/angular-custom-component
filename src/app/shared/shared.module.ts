import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './components/table.component';



@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    TableComponent,
    MaterialModule
  ]
})
export class SharedModule { }
