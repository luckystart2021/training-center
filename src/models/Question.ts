import { alphabet } from "../constants/constaints";
import { getAssetUrl } from "../utils/constant";

export class Answer {
  answer: string;
  constructor(answer?: string) {
    this.answer = answer ? answer : "";
  }
}

export class Question {
  id: number = 0;
  index: number = -1;
  question: string = "";
  imgUrl: string = "";
  answerList: Answer[] = [];
  answerIndex: number = -1;

  constructor(data?: any, _index?: number) {
    if (data) {
      this.index = _index;
      this.id = data.id;
      this.question = data.question_name;
      this.imgUrl = getAssetUrl(data.img);
      this.answerList = data.answers?.map((item) => new Answer(item.answer));
    }
  }
}

export class LicenseType {
  id: number;
  licenseName: string;
  quantity: number;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.licenseName = data.name;
      this.quantity = data.number_question;
    }
  }
}

export class AnswerChecked {
  id: number;
  answerIndex: number;
  answer: string;

  constructor(_id: number, _index: number) {
    this.id = _id;
    this.answerIndex = _index;
    this.answer = alphabet.slice(_index, _index + 1);
  }
}

export class Test {
  id: number;
  name: string;
  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
    }
  }
}
export class TestList {
  timeSeconds: number = 0;
  timeCount: number = 0;

  suite: Test[] = [];
  id: number;
  constructor(idLoaiDe: number, data?: any) {
    if (data) {
      this.id = idLoaiDe;
      this.timeSeconds = Number(data.time) * 60;
      this.timeCount = this.timeSeconds;
      this.suite = data.suite.map((item) => new Test(item));
    }
  }
}
