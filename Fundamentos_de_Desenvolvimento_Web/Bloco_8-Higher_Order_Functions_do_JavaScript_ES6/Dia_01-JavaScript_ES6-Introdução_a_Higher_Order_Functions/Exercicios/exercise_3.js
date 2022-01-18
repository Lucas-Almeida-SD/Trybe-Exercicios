const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (rightAnswer, studentAnswer) => {
  if (studentAnswer === 'N.A') {return 0} 
  else if (studentAnswer === rightAnswer) {return 1}
  else {return -1}
}

const counterRightAnswers = (rightAnswers, studentAnswers, check) => {
  let count = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    count += check(rightAnswers[index], studentAnswers[index]);
  }
  return count;
}

const finalResult = (rightAnswers, studentAnswers, func) => {
  return func(rightAnswers, studentAnswers, checkAnswer);
}

console.log(finalResult(RIGHT_ANSWERS, STUDENT_ANSWERS, counterRightAnswers));