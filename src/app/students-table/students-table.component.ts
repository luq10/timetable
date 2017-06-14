import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

import { StudentsService } from './students.service';
import { Student } from './student.model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  @ViewChild('tableContainer') tableContainer: ElementRef;
  @ViewChild('tableCalender') tableCalender: ElementRef;

  students: Student[] = [];
  isMinimizeUserData = true;
  isCalenderFullTime = false;

  constructor(private studentsService: StudentsService, private renderer: Renderer2) { }

  ngOnInit() {
    this.students = this.studentsService.data;

    this.updateMinimizeUserDataView();
    this.updateCalenderFullTimeView();
  }

  toggleMinimizeUserData() {
    this.isMinimizeUserData = !this.isMinimizeUserData;

    this.updateMinimizeUserDataView();
  }

  toggleCalenderFullTime() {
    this.isCalenderFullTime = !this.isCalenderFullTime;

    this.updateCalenderFullTimeView();
  }

  updateMinimizeUserDataView() {
    if (this.isMinimizeUserData) {
      this.renderer.addClass(this.tableContainer.nativeElement, 'mini-user-data');
    } else {
      this.renderer.removeClass(this.tableContainer.nativeElement, 'mini-user-data');
    }
  }

  updateCalenderFullTimeView() {
    if (this.isCalenderFullTime) {
      console.log('add');

      this.renderer.addClass(this.tableCalender.nativeElement, 'table-calender--full-time');
    } else {
      console.log('remove');

      this.renderer.removeClass(this.tableCalender.nativeElement, 'table-calender--full-time');
    }
  }
}
