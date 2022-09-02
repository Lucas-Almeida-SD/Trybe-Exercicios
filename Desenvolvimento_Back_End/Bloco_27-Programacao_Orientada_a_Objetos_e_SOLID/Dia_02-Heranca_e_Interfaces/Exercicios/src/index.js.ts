import crypto from 'crypto';
import IEmployee from './interfaces/employee.interface';

import {
  validatePerson,
  validateStudent,
  validateSubject,
  validateTeacher,
} from "./validations/validations";

class Person {
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

const person1 = new Person('Maria', '11/03/1997');
const person2 = new Person('Joao', '24/09/1975');
// console.log(person1);
// console.log(person2);

class Student extends Person {
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

  private generateEnrollment(): string {
    return crypto.randomBytes(8).toString('hex');
  }
}

const student1 = new Student('Maria', '11/03/1997', [8], [6, 7]);
const student2 = new Student('Joao', '24/09/1975', [3, 8, 10], [9, 9]);
const student3 = new Student('Raimundo', '05/12/2012', [10, 10, 9, 7], [10, 9]);
const student4 = new Student('Pedro', '14/07/1983', [8, 9, 7], [10]);
const student5 = new Student('Camila', '07/01/2006', [9, 9], [10]);
console.log(student1);
console.log(student1.sumGrades());
console.log(student1.sumAverageGrade());
console.log(student2);
console.log(student3);
console.log(student4);
console.log(student5);

class Subject {
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


class Teacher extends Person implements IEmployee {
  private _salary: number;
  private _subject: Subject;
  private _registration: string;
  private _admissionDate: string;

  constructor(
    name: string,
    birthDate: string,
    salary: number,
    subject: Subject,
    admissionDate: string,
  ) {
    const result = validateTeacher(salary, admissionDate)
    if (typeof result === 'boolean') { 
      super(name, birthDate);
      this._salary = salary;
      this._subject = subject;
      this._admissionDate = admissionDate;
      this._registration = this.generateRegistration();
    }
    else {
      throw new Error(result)
    }
  }

  get salary() {
    return this._salary;
  }

  get subject() {
    return this._subject;
  }

  get registration() {
    return this._registration;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  public generateRegistration() {
    return crypto.randomBytes(8).toString('hex');
  }
}