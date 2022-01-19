const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// QUESTÃO 1
const addNightShift = (object, key, value) => {
  object[key] = value;
}
addNightShift(lesson2, 'turno', 'noite');

// QUESTÃO 2
const listKeys = (objeto) => Object.keys(objeto);

// QUESTÃO 3
const showLength = (object) => {console.log(Object.keys(object).length);}

// QUESTÃO 4
const listValue = (object) => Object.values(object);

// QUESTÃO 5
const allLessons = {};
Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});

// QUESTÃO 6
const showStudetsNumbers = () => {
  const lessonsValues = Object.values(allLessons);
  for (let lesson of lessonsValues) {
    console.log(parseInt(lesson.numeroEstudantes));
  }
}

// QUESTÃO 7
const getValueByNumber = (lesson, position) => {
  const values = Object.values(lesson);
  return values[position];
}

// QUESTÃO 8
const verifyPair = (object, key, value) => {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const result = (keys.indexOf(key) !== -1 && keys.indexOf(key) === values.indexOf(value)) ? true : false;
  return result;
}

// QUESTÃO BÔNUS I
const verifyMathStudents = () => {
  let counter = 0;
  const lessonsList = Object.values(allLessons)
  for (let lesson of lessonsList) {
    if (lesson.materia === 'Matemática') {
      counter += lesson.numeroEstudantes;
    }
  }
  return counter;
}

// QUESTÃO BÔNUS II
const teacherReport = (objeto, teacher) => {
  const lessonsList = Object.values(allLessons)
  const subjects = [];
  let counterStudents = 0;
  for (let lesson of lessonsList) {
    if (lesson.professor === teacher) {
      subjects.push(lesson.materia);
      counterStudents += lesson.numeroEstudantes;
    }
  }
  return {professor: teacher, aulas: subjects, estudantes: counterStudents};
}
console.log(teacherReport(allLessons, 'Maria Clara'));