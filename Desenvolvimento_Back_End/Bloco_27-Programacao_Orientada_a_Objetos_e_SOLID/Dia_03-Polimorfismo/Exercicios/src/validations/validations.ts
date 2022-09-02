import { isExists } from "date-fns";

export const validatePerson = (name: string, birthDate: string): boolean | string => {
  if (name.length < 3) throw new Error('Invalid name!');
  const [day, month, year] = birthDate.split('/');

  if (!isExists(Number(year), Number(month) - 1, Number(day))) {
    return 'Date of birth non-existent!';
  };

  const myDate = new Date(Number(year), Number(month) - 1, Number(day));
  if (myDate.valueOf() > Date.now().valueOf()) {
    return'Invalid birth date!';
  }

  if (new Date(Date.now()).getFullYear() - myDate.getFullYear() > 120) {
    return'Date of birth not allowed!';
  }

  return true;
}

export const validateStudent = (
  examsGrades: number[],
  worksGrades: number[]
): boolean | string => {
  if (examsGrades.length > 4 || worksGrades.length > 2) {
    return 'Number of grades not allowed!';
  }
  return true;
}

export const validateSubject = (name: string): boolean | string => {
  if (name.length < 3) {
    return 'Invalid name!';
  }
  return true
}

export const validateTeacher = (
  salary: number,
  admissionDate: string,
): boolean | string => {
  if (salary < 0) {
    return 'Salary not allowed!';
  }

  const [day, month, year] = admissionDate.split('/');

  if (!isExists(Number(year), Number(month) - 1, Number(day))) {
    return 'Date of admission non-existent!';
  };

  const myAdmission = new Date(Number(year), Number(month) - 1, Number(day));
  if (myAdmission.valueOf() > Date.now().valueOf()) {
    return 'Invalid admission date!';
  }

  return true;
}

export const validateEvaluation = (score: number) => {
  if (score < 0) return 'Score not allowed!'
  return true
}

export const validateExam = (score: number) => {
  if (score > 25) return 'Score not allowed!'
  return true
}

export const validateWork = (score: number) => {
  if (score > 50) return 'Score not allowed!'
  return true
}

export const validateOrderItem = (name: string, price: number) => {
  if (name.length < 3) return 'Invalid name!'

  if (price < 0) return 'Price not allowed!'

  return true;
}

export const validateOrder = (items: any[], discount: number) => {
  if (items.length === 0) return 'Items cannot be empty!'

  if (discount < 0 || discount > 1) return 'Discount not allowed!';

  return true;
}