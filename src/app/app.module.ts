import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StudentsTableComponent } from './students-table/students-table.component';

import { StudentsService } from './students-table/students.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
