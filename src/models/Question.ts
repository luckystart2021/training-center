export class Answer {
  id: number;
  answer: string;
  constructor(id: number, answer: string) {
    this.id = id;
    this.answer = answer;
  }
}

export class Question {
  id: number;
  index: number;
  question: string;
  AnswerList: Answer[];

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.index = data.index;
      this.question = data.question;
      this.AnswerList = data.AnswerList;
    }
  }
}
