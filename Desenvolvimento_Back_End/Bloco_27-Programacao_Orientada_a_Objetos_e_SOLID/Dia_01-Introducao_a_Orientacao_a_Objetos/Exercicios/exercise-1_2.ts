class Student {
  private registration: number;
  private name: string;
  private examScores: [ number, number, number, number ];
  private workScores: [ number, number ];

  constructor(
    registration: number,
    name: string,
    examScores: [ number, number, number, number ],
    workScores: [ number, number ]
  ) {
    this.registration = registration;
    this.name = name;
    this.examScores = examScores;
    this.workScores = workScores;
  }

  public sumOfScores() {
    const sumExam = this.examScores.reduce((acc, cur) => acc + cur, 0);
    const sumWork = this.workScores.reduce((acc, cur) => acc + cur, 0);

    return (sumExam + sumWork);
  }

  public averageOfScores() {
    const avg = this.sumOfScores() / (this.examScores.length + this.workScores.length);

    return avg.toFixed(2);
  }
}
