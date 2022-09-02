import { isExists, isLeapYear as checkLeapYear, parse } from 'date-fns';

class MyDate {
  day: number | string;
  month: number | string;
  year: number | string;
  private monthsName: string[] = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]

  constructor(day: number, month: number, year: number) {
    if (isExists(year, month - 1, day)) {
      this.day = day;
      this.month = month;
      this.year = year;
      return;
    }
    this.day = '01';
    this.month = '01';
    this.year = '1900';
  }

  getMonthName() {
    return this.monthsName[Number(this.month) - 1];
  }

  isLeapYear() {
    const year = Number(this.year);
    const month = Number(this.month);
    const day = Number(this.day);
    return checkLeapYear(new Date(year, month, day));
  }
}

const newDate = new MyDate(11, 3, 1997);

console.log(newDate.getMonthName());
console.log(checkLeapYear(new Date(2024, 3, 11)));

