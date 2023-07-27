export type possibleMsgClasses =
  | "textMsg"
  | "audioMsg"
  | "imgURL"
  | "musicianPos"
  | "linkMsg";
export type msgType = {
  msgClass: possibleMsgClasses;
  msg: string;
  device: "phone" | "desktop" | "any";
};

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
      device: "any",
    },
    qa: {
      "Расскажи о своём инструменте": [
        {
          msgClass: "textMsg",
          msg: "Скрипка – это струнный смычковый музыкальный инструмент. Первая скрипка была изобретена в 1540 году. Имеет 4 струны, которые натянуты на гриф. Обладает высоким регистром.",
          device: "any",
        },
        {
          msgClass: "imgURL",
          msg: "Message.png",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хочешь узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит твой инструмент?": [
        { msgClass: "audioMsg", msg: "soloviolin.mp3", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Так звонко звучит скрипка!",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хочешь узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Посмотреть глазами музыканта": [
        { msgClass: "musicianPos", msg: "plug", device: "any" }, // plug
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть тебя на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
          device: "any",
        },
        {
          msgClass: "imgURL",
          msg: "QRCode.png",
          device: "desktop",
        },
        {
          msgClass: "linkMsg",
          msg: "https://omfil.ru/afisha/",
          device: "phone",
        },
      ],
    },
  },
};