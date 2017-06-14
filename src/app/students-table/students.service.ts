import { Injectable } from '@angular/core';

import { Student } from './student.model';

@Injectable()
export class StudentsService {
  data: Student[] = [
    {
      name: 'Adam',
      surname: 'Malinowski',
      skypeId: 'asd',
      tag: ['a', 'b']
    },
    {
      name: 'Kamil',
      surname: 'Adamek',
      skypeId: 'asd',
      tag: ['b', 'c']
    }
  ];

  constructor() {}

  addStudent(student: Student) {
    this.data.push(student);
  }
}
