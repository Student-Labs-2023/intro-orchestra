export type possibleMsgClasses =
  | "textMsg"
  | "audioMsg"
  | "imgURL"
  | "musicianPos";
export type msgType = { msgClass: possibleMsgClasses; msg: string };

export type QASystemType = {
  [chatId: string]: {
    name: string;
    start: msgType;
    qa: { [item: string]: Array<msgType> };
  };
};

const names: string[] = ["Гоар Айрапетян", "Имя 2"];
const namesObj = Object.assign({}, names);



const QASystem: QASystemType = {
  0: {
    name: namesObj[0],
    start: {
      msgClass: "textMsg",
      msg: "Привет, меня зовут Гоар. \n Я скрипачка в симфоническом оркестре, исполняю партию первых скрипок.",
    },
    qa: {
      "Расскажи о своём инструменте": [
        {
          msgClass: "textMsg",
          msg: "Скрипка – это струнный смычковый музыкальный инструмент. Первая скрипка была изобретена в 1540 году. Имеет 4 струны, которые натянуты на гриф. Обладает высоким регистром.",
        },
        {
          msgClass: "textMsg",
          msg: "Скрипка – это струнный смычковый музыкальный инструмент. Первая скрипка была изобретена в 1540 году. Имеет 4 струны, которые натянуты на гриф. Обладает высоким регистром.",
        },
        {
          msgClass: "textMsg",
          msg: "Скрипка – это струнный смычковый музыкальный инструмент. Первая скрипка была изобретена в 1540 году. Имеет 4 струны, которые натянуты на гриф. Обладает высоким регистром.",
        },
        {
          msgClass: "textMsg",
          msg: "Продам гараж ",
        },
        {
          msgClass: "imgURL",
          msg: "chevron.left.svg", // plug
        },
      ],
      "Как звучит твой инструмент?": [
        { msgClass: "textMsg", msg: "Так звонко звучит скрипка!" },
        { msgClass: "audioMsg", msg: "soloviolin.mp3" },
      ],
      "Посмотреть глазами музыканта": [
        { msgClass: "musicianPos", msg: "plug" }, // plug
      ],
    },
  },
};