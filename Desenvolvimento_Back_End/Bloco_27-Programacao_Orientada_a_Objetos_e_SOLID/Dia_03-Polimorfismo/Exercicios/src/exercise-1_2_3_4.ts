import crypto from 'crypto';
import IEnrollable from './interfaces/enrollable.interface';

import {
  validatePerson,
  validateStudent,
  validateSubject,
  validateTeacher,
  validateEvaluation,
  validateExam,
  validateWork,
} from "./validations/validations";

export abstract class Person {
  protected _name: string;
  protected _birthDate: string;

  constructor(name: string, birthDate: string) {
    const result = validatePerson(name, birthDate);
    if (typeof result === 'boolean') {
      this._name = name;
      this._birthDate = birthDate;
    }
    else {
      throw new Error(result)
    }
  }

  get name() {
    return this._name;
  }

  get birthDate() {
    return this._birthDate;
  }
}

export class Student extends Person implements IEnrollable {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(
    name: string,
    birthDate: string,
    examsGrades: number[],
    worksGrades: number[],
  ) {
    const result = validateStudent(examsGrades, worksGrades);
    if (typeof result === 'boolean') { 
      super(name, birthDate);
      this._enrollment = this.generateEnrollment();
      this._examsGrades = examsGrades;
      this._worksGrades = worksGrades;
    }
    else {
      throw new Error(result)
    }
  }

  get enrollment() {
    return this._enrollment;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  get worksGrades() {
    return this._worksGrades;
  }

  public sumGrades(): number {
    const sumExams: number = this.examsGrades.reduce((acc, grade) => acc + grade, 0);
    const sumWorks: number = this.worksGrades.reduce((acc, grade) => acc + grade, 0);
    const total = (sumExams + sumWorks).toFixed(2);
    return Number(total);
  }

  public sumAverageGrade(): number {
    const avg = this.sumGrades() / (this.examsGrades.length + this.worksGrades.length);
    return Number(avg.toFixed(2));
  }

  generateEnrollment(): string {
    return crypto.randomBytes(8).toString('hex');
  }
}

class Employee extends Person implements IEnrollable {
  private _salary: number;
  private _admissionDate: string;
  private _enrollment: string;

  constructor(
    name: string,
    birthDate: string,
    salary: number,
    admissionDate: string,
  ) {
    const result = validateTeacher(salary, admissionDate)
    if (typeof result === 'boolean') { 
      super(name, birthDate);
      this._enrollment = this.generateEnrollment();
      this._salary = salary;
      this._admissionDate = admissionDate;
    }
    else {
      throw new Error(result)
    }
  }

  get enrollment() {
    return this._enrollment;
  }

  get salary() {
    return this._salary;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  generateEnrollment() {
    return crypto.randomBytes(8).toString('hex');
  }
}

export class Subject {
  public name: string;

  constructor(name: string) {
    const result = validateSubject(name)
    if (typeof result === 'boolean') { 
      this.name = name;
    }
    else {
      throw new Error(result)
    }
  }
}

export class Teacher extends Employee {
  private _subject: Subject;

  constructor(
    name: string,
    birthDate: string,
    salary: number,
    subject: Subject,
    admissionDate: string,
  ) {
    const result = validateTeacher(salary, admissionDate)
    if (typeof result === 'boolean') { 
      super(name, birthDate, salary, admissionDate);
      this._subject = subject;
    }
    else {
      throw new Error(result)
    }
  }

  get subject() {
    return this._subject
  }
}

// const student1 = new Student('Maria', '11/03/1997', [8], [6, 7]);
// const student2 = new Student('Joao', '24/09/1975', [3, 8, 10], [9, 9]);

// const subject1 = new Subject('Inglês');
// const subject2 = new Subject('Física');
// const teacher1 = new Teacher('Jean', '04/06/1975', 3000, subject1, '17/05/2012');
// const teacher2 = new Teacher('Carlos', '27/12/1991', 3500, subject2, '15/01/2018');


// console.log(student1);
// console.log(student1.sumGrades());
// console.log(student1.sumAverageGrade());
// console.log(student2);
// console.log(teacher1);
// console.log(teacher2);

abstract class Evaluation {
  public score: number;
  public teacher: Teacher;

  constructor(score: number, teacher: Teacher) {
    const result = validateEvaluation(score);
    if (typeof result === 'boolean') {
      this.score = score;
      this.teacher = teacher;
    } else {
      throw new Error(result);
    }
  }
}

class Exam extends Evaluation {

  constructor(score: number, teacher: Teacher) {
    const result = validateExam(score);
    if (typeof result === 'boolean') {
      super(score, teacher);
    } else {
      throw new Error(result);
    }
  }
}

class Work extends Evaluation {

  constructor(score: number, teacher: Teacher) {
    const result = validateWork(score);
    if (typeof result === 'boolean') {
      super(score, teacher);
    } else {
      throw new Error(result);
    }
  }
}

// const exam1 = new Exam(22, teacher1);
// const exam2 = new Exam(17, teacher2);

// const work1 = new Work(38, teacher1);
// const work2 = new Work(46, teacher2);

// console.log(exam1);
// console.log(exam2);
// console.log(work1);
// console.log(work2);


