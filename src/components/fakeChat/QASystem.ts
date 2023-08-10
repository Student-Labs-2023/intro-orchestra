import { IQASystem } from "@/types/QASystem.interface";

const names: string[] = [
  "Дмитрий Васильев",
  "Анастасия Буторина",
  "Андрей Лопатин",
  "Анна Романова",
  "Вячеслав Антонов",
  "Евгений Зайцев",
  "Иван Подшивалов",
  "Павел Лунин",
  "Сергей Бутиков",
  "Станислав Сезонов",
  "Даурен Орынбаев"
];

export const QASystem: IQASystem = {
  vasiliev: {
    name: names[0],
    panoramaData: {
      imageSrc: "/panorama-images/vasiliev-panorama.jpg",
      yaw: 170,
      pitch: -30,
    },
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
  butorina: {
    name: names[1],
    panoramaData: {
      imageSrc: "/panorama-images/butorina-panorama.jpg",
      yaw: 0,
      pitch: 0,
    },
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
  lopatin: {
    name: names[2],
    panoramaData: {
      imageSrc: "/panorama-images/lopatin-panorama.jpg",
      yaw: 30,
      pitch: -5,
    },
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
  romanova: {
    name: names[3],
    panoramaData: {
      imageSrc: "/panorama-images/romanova-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
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
  antonov: {
    name: names[4],
    panoramaData: {
      imageSrc: "/panorama-images/antonov-panorama.jpg",
      yaw: 140,
      pitch: -15,
    },
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
  zaitsev: {
    name: names[5],
    panoramaData: {
      imageSrc: "/panorama-images/zaitsev-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
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
  podshivalov: {
    name: names[6],
    panoramaData: {
      imageSrc: "/panorama-images/podshivalov-panorama.jpg",
      yaw: -120,
      pitch: -15,
    },
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
  lunin: {
    name: names[7],
    panoramaData: {
      imageSrc: "/panorama-images/lunin-panorama.jpg",
      yaw: -180,
      pitch: -15,
    },
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
  butikov: {
    name: names[8],
    panoramaData: {
      imageSrc: "/panorama-images/butikov-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
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
  sesonov: {
    name: names[9],
    panoramaData: {
      imageSrc: "/panorama-images/sesonov-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
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
  orynbaev: {
    name: names[10],
    panoramaData: {
      imageSrc: "/panorama-images/orynbaev-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
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
