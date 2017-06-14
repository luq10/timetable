import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

import { StudentsService } from './students.service';
import { Student } from './student.model';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  @ViewChild('tableContainer') tableContainer: ElementRef;

  students: Student[] = [];
  isMinimizeUserData = true;

  constructor(private studentsService: StudentsService, private renderer: Renderer2) { }

  ngOnInit() {
    this.students = this.studentsService.data;

    this.updateMinimizeUserDataView();
  }

  toggleMinimizeUserData() {
    this.isMinimizeUserData = !this.isMinimizeUserData;

    this.updateMinimizeUserDataView();
  }

  updateMinimizeUserDataView(){
    if (this.isMinimizeUserData) {
      this.renderer.addClass(this.tableContainer.nativeElement, 'mini-user-data');
    } else {
      this.renderer.removeClass(this.tableContainer.nativeElement, 'mini-user-data');
    }
  }
}
