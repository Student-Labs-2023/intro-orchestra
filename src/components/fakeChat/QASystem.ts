import { IQASystem } from "@/types/QASystem.interface";

interface INames {
  [nameId: string]: string;
}

const somethingElse = [
  "Хотите узнать что-нибудь еще?",
  "Интересно ли Вам что-то еще?",
  "Хотели бы Вы задать еще вопросы?",
  "Интересны ли Вам ответы на другие вопросы?",
  "Есть ли что-то еще, что Вас интересует?",
];

const names: INames = {
  vasiliev: "Дмитрий Васильев",
  butorina: "Анастасия Буторина",
  lopatin: "Андрей Лопатин",
  romanova: "Анна Романова",
  stepancev: "Вадим Степанцев",
  antonov: "Вячеслав Антонов",
  zaitsev: "Евгений Зайцев",
  podshivalov: "Иван Подшивалов",
  lunin: "Павел Лунин",
  butikov: "Сергей Бутиков",
  sesonov: "Станислав Сезонов",
  orynbaev: "Даурен Орынбаев",
  dyachenko: "Григорий Дьяченко",
  plaksin: "Евгений Плаксин",
  koroticheva: "Ирина Коротичева",
  bogov: "Никита Богов",
};

export const QASystem: IQASystem = {
  vasiliev: {
    photoSrc: "vasiliev",
    name: names["vasiliev"],
    panoramaData: {
      imageSrc: "/panorama-images/vasiliev-panorama.webp",
      yaw: 170,
      pitch: -30,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Дмитрий Васильев. Я дирижёр в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Категория 1": {
        "В чем заключается миссия дирижера?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Дирижёр транслирует свои идеи оркестру и реализует их вместе с музыкантами.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Эти идеи в виде исполнительского замысла и сложившейся концепции на основе изученной партитуры передаются музыкантам оркестра посредством жестов и слов.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "На репетициях дирижёр не только дирижирует, но и поясняет, рассказывает, выражает свои пожелания, слушает встречные пожелания оркестрантов.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Дирижирует, управляет оркестром дирижёр посредством жестов. В дирижерских жестах есть определенные рисунки, которые понятны всем музыкантам оркестра.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Кроме рисунка, жест включает в себя показ темпа, динамики, штриха, фразировки и характера музыки. Всё это вместе должно создавать определенный музыкальный образ.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "В процессе дирижирования дирижёр внимательно слушает оркестр и постоянно корректирует его звучание, в соответствии со своим замыслом.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Иногда может показаться, что музыканты оркестра совсем не смотрят на дирижера, но это не так.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Оркестранты большую часть времени, действительно, смотрят в ноты, при этом видя дирижера периферийным зрением.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "В ключевых местах (обычно там, где происходят изменения темпа, динамики, характера и т.д.) они поднимают головы, чтобы лучше увидеть дирижера и своих партнеров по сцене.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Умение идеально играть свою партию, следуя жестам дирижера и при этом соотнося свое звучание с игрой музыкантов вокруг – отличительная черта хорошего оркестранта.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Дирижёр не играет музыку – играют музыканты оркестра.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Поэтому отдача и вдохновение оркестрантов на концерте во многом зависит от того, насколько дирижер убедителен в дирижировании и воплощении своих замыслов.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "В чем заключается миссия дирижера?",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  butorina: {
    photoSrc: "butorina",
    name: names["butorina"],
    panoramaData: {
      imageSrc: "/panorama-images/butorina-panorama.webp",
      yaw: 0,
      pitch: 0,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Анастасия Буторина. Я играю на виолончели в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Считается, что виолончель по своему тембру ближе всего к человеческому голосу.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "В оркестре она выполняет преимущественно две роли: роль основы, басового голоса наравне с контрабасом, и мелодической линии, не уступая первым скрипкам.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Не случайно композиторы киномузыки, чтобы передать большую глубину чувств, обращаются к виолончели: её можно услышать в саундтреках к фильмам «Интерстеллар», «Семь лет в Тибете», «Жанна Дюбари».",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "cello.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },

      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "У меня нет особых привычек или примет перед выступлением вроде таких, как поплевать через левое плечо или сесть пятой точкой на упавшие на пол ноты.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Когда я переоблачаюсь в концертный костюм, сразу чувствую себя по-другому.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Одним из самых запоминающихся экспериментов было исполнение дуэтом с моей коллегой-виолончелисткой песни рок-группы AC/DC в сопровождении симфонического оркестра под управлением нашего главного дирижера Дмитрия Васильева.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Расскажите про незабываемый момент на концерте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Музыка – великое искусство. Наша профессия тесно связана с эмоциями, поэтому каждый момент соприкосновения с этим волшебством становится незабываемым.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Как в одну реку нельзя войти дважды, так и каждое исполнение в определенный момент времени уникально.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
      },

      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  lopatin: {
    photoSrc: "lopatin",
    name: names["lopatin"],
    panoramaData: {
      imageSrc: "/panorama-images/lopatin-panorama.webp",
      yaw: 30,
      pitch: -5,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Андрей Лопатин. Я скрипач в симфоническом оркестре, исполняю партию первых скрипок.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Я играю на скрипке работы французского мастера Алана Карбонара.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Это современный инструмент, созданный в 2012 году по модели скрипки знаменитого французского мастера 19-го века Жана Батиста Вильома.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "violin.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Особых привычек нет.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Наверное, как и у всех, настроиться на выступление и проработать наиболее сложные места из предстоящего концерта.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Одним из самых необычных музыкальных экспериментов было исполнение сочинения Дмитрия Курляндского «Бунт весны».",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Это произведение стирает границы между слушателями и исполнителями, создавая единое звуковое пространство.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Непредвиденные ситуации на концертах случаются разные: рвутся струны, падают ноты, садятся батарейки в подсветке на пюпитре и т.д.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "На одном концерте у солиста-скрипача расстроилась скрипка, и он доигрывал произведение на моем инструменте.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  romanova: {
    photoSrc: "romanova",
    name: names["romanova"],
    panoramaData: {
      imageSrc: "/panorama-images/romanova-panorama.webp",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Анна Романова. Я играю на арфе в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Арфа – очень древний струнный щипковый инструмент, но современный вид концертная арфа приобрела только в начале XIX века с изобретением двойного педального механизма.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "У современной концертной арфы 47 струн и 7 педалей, которые используются для повышения или понижения звучания струн (диезы, бемоли).",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Таким образом, на арфе играют не только руками, но и ногами.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "harp.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Перед выступлением никаких особых примет и привычек у меня нет.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Просто нужно выспаться, настроиться и хорошо разыграться.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Самый необычный эксперимент, наверное, игра на арфе с помощью пластиковой карты).",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Так было обозначено у композитора.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "После концерта карта немного стёрлась, и нет, она была не банковская)",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: 'Был один совершенно ужасный момент на концерте-сказке "Русалочка".',
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Сказки Андерсена вообще чаще всего пронзительно грустные, а тут ещё и музыка...",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Надо было играть как раз в тот момент, когда Русалочка превращается в морскую пену. А у меня на глазах слезы!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Даже не знаю, что дирижер тогда подумал)) Не люблю Андерсена)",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  stepancev: {
    photoSrc: "stepancev",
    name: names["stepancev"],
    panoramaData: {
      imageSrc: "",
      yaw: 140,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Вадим Степанцев. Я играю на кларнете в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Мой инструмент – кларнет. Деревянный духовой инструмент, имеющий большой тембровый и звуковысотный диапазон.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Благодаря этим качествам в симфоническом оркестре он часто используется в качестве солирующего инструмента.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Также кларнет можно часто услышать в джазовой музыке, в музыке в стиле клезмер и в эстраде.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "clarinet.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Особых примет и привычек перед выступлением у меня нет.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Чаще просто стараюсь отстраниться от коллег и успокоить нервную систему, чтоб настроиться на выступление.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Необычным экспериментом было озвучивание в составе небольшого оркестра немого кино Чарли Чаплина в большом зале кинотеатра.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "На фестивале «Звёзды на Байкале 2014» Денис Мацуев поменял программы местами, и мне пришлось срочно прибыть в концертный зал и играть «Рапсодию в стиле блюз» Гершвина, которая начинается с развёрнутого вступления кларнета, без репетиции.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Вышло неплохо)",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  antonov: {
    photoSrc: "antonov",
    name: names["antonov"],
    panoramaData: {
      imageSrc: "/panorama-images/antonov-panorama.webp",
      yaw: 140,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Вячеслав Антонов. Я играю на контрабасе в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Контрабас – самый низкий по звучанию инструмент из семейства струнных, в оркестре появился в середине 17-го века, бывают 4-х и 5-ти струнные с квартовым строем!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Приёмы игры на контрабасе: смычком и пиццикато!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Помимо его прямого назначения в симфоническом и камерном оркестрах, многие приветствуют контрабас в различных ансамблях как для классических, так и для современных композиций в сочетании с современными, даже электронными инструментами)",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "double_bass.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "В день концерта предпочитаю приезжать за час разыграться и для настройки, подготовки инструмента!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Перед выступлением за 10-15 минут нахожусь за кулисами в относительной тишине), насыщаясь энергией заполняемого зрителями зала!",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Современные композиторы в постоянном поиске новых необычных способов донесения информации путём извлечения звуков из классических инструментов различными приёмами: разными стуками, скрежетами, свистами и т.д.!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "В моей практике было много необычных произведений, в которых использовались эти приемы!",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "За 23 сезона моей карьеры контрабасиста самые большие эмоции вызывает реакция полностью заполненного зала как на гастролях в других странах, где неоднократно выступал наш оркестр, так и на родине в своем городе!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Самое ценное для артистов – это громкие нескончаемые овации довольной публики и постоянное посещение наших концертов!",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  zaitsev: {
    photoSrc: "zaitsev",
    name: names["zaitsev"],
    panoramaData: {
      imageSrc: "/panorama-images/zaitsev-panorama.webp",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Евгений Зайцев. Я играю на флейте в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Флейта – деревянный духовой инструмент.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Она отличается от других деревянных духовых лабиальным способом извлечения звука и горизонтальной позицией в руках исполнителя.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "flute.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Особых привычек нет. Но есть подготовительные моменты. Такие как разыгрывание (исполнение определенных упражнений) и концентрация внимания перед выступлением.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Лучший эксперимент в инструментальной музыке – это ансамбль.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Самое неожиданное сочетание инструментов порождает неповторимые тембры.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Вот, например, мы с коллегами флейтистами раздобыли ноты трио для флейты, флейты пикколо и альтовой флейты.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Сочетание невероятное!",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Мой самый незабываемый концерт в нашем оркестре прошел в Красноярской филармонии в 2019 году.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Мы исполняли 7-ю симфонию Бетховена. Это была неповторимая энергетика как со стороны слушателей, так и со стороны оркестра.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Само исполнение было на высочайшем уровне!",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  podshivalov: {
    photoSrc: "podshivalov",
    name: names["podshivalov"],
    panoramaData: {
      imageSrc: "/panorama-images/podshivalov-panorama.webp",
      yaw: -120,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Иван Подшивалов. Я играю на фаготе в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Фагот – деревянный духовой инструмент (низкий голос среди всех деревянных). Создан в 16 веке.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "bassoon.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Перед выступлением думаю о музыке, которую предстоит исполнять.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Когда современные композиторы просят играть на одной части инструмента.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Это детские эмоции: когда ребенок, увидев и услышав инструмент, восхищается.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  lunin: {
    photoSrc: "lunin",
    name: names["lunin"],
    panoramaData: {
      imageSrc: "/panorama-images/lunin-panorama.webp",
      yaw: -180,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Павел Лунин. Я скрипач в симфоническом оркестре, исполняю партию вторых скрипок.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "В чём отличие первых и вторых скрипок?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Как правило, первые скрипки играют основную мелодию (тему), а вторые чаще аккомпонируют первым, дублируют их партию в октаву, унисон или другой интервал.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "В чём отличие первых и вторых скрипок?",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "violin.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Самая распространенная примета музыкантов – если уронил ноты перед выступлением, нужно на них посидеть.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Привычка перед выступлением – разыграться, повторить сложные фрагменты в произведениях.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Каждый сезон происходит что-то интересное, возникают неожиданные проекты, каждый из которых незабываем по-своему.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Один из экспериментов особенно запомнился, когда пришлось осваивать новый инструмент, мандолину, для исполнения симфонии Джона Корельяно в концертном зале им. Чайковского (г. Москва).",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Для меня незабываемым моментом было исполнение гимна России в Газпром Арене (г. Санкт-Петербург), когда восемь тысяч музыкантов исполняли его одновременно, необыкновенный момент.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  butikov: {
    photoSrc: "butikov",
    name: names["butikov"],
    panoramaData: {
      imageSrc: "/panorama-images/butikov-panorama.webp",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Сергей Бутиков. Я играю на трубе в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Первые трубы появились в 1500 году до нашей эры.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Труба – выразительный и самый яркий инструмент. Сейчас ни одно направление в музыке не обходится без трубы.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "pipe.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Перед выступлением для меня важно хорошо выспаться.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Приём пищи – не позднее, чем за три часа. И ни в коем случае не употреблять солёную рыбу :)",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Однажды так получилось, что пришлось не спать перед очень ответственным концертом почти двое суток.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Но, собрав волю в кулак, мы выступили, всё прошло на высшем уровне.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Всегда играл только по нотам. И как-то выйдя на сцену, понял, что забыл очки.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Оказалось, что знаю пьесу наизусть :)",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  sesonov: {
    photoSrc: "sesonov",
    name: names["sesonov"],
    panoramaData: {
      imageSrc: "/panorama-images/sesonov-panorama.webp",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Станислав Сезонов. Я играю на ударной установке в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Ударные инструменты - это самые древние музыкальные инструменты, обладают наибольшим разнообразием.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Ударная установка является основой всей эстрадной музыки.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "drum_kit.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Есть привычка разыгрываться перед выступлением.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Играл концерт дуэтом – рояль и ударные.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Пришлось сочинять свои партии, чтобы с помощью барабанной установки сымитировать народные инструменты и бас.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Во время концерта в Концзале упал на впереди сидящих музыкантов звукоизолирующий щит для барабанов",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  bogov: {
    photoSrc: "bogov",
    name: names["bogov"],
    panoramaData: {
      imageSrc: "",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Никита Богов. Я играю на тромбоне в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Тромбон – это медный духовой инструмент, известен с 15-го века.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Звуковой колорит тромбона очень богат: он может быть мужественным, ярким и грозным, но также может быть спокойным и лиричным.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Так первоначально инструмент использовался в церковных произведениях.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Талантливый музыкант может заставить инструмент пропеть тихую, мягкую мелодию или оглушить слушателей задорным маршем.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Величайший композитор Людвиг ван Бетховен говорил, что голос тромбона – это голос Бога.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "trombon.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Нет, потому что постоянные выступления и ежедневные занятия на тромбоне – это моя жизнь, где предмет – это тромбон, а привычка – это занятия на тромбоне.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  orynbaev: {
    photoSrc: "orynbaev",
    name: names["orynbaev"],
    panoramaData: {
      imageSrc: "/panorama-images/orynbaev-panorama.webp",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Даурен Орынбаев. Я играю на литаврах в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Литавры – ударный музыкальный инструмент с определённой высотой звучания.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Они представляют собой систему от двух до семи металлических котлообразных чаш, открытая сторона которых затянута кожей или пластиком, а нижняя часть может иметь отверстие.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "timpani.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Перед выступлением всегда подстраиваю литавры, так как в зависимости от температуры, влажности и давления литавры могут высить или низить.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Экспериментов с ударными было много: играл на посуде, на металлических бочках, ножами по крышкам и т.д. ",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Еще был музыкальный эксперимент, где темп в произведении задавал стук сердца. Подключали микрофоны к человеку, и темп за счет дыхания и напряжения в мышцах то ускорялся, то замедлялся и успокаивался...",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Года 4 назад мне пришлось играть концерт без нот в СимфоПарке.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  dyachenko: {
    photoSrc: "dyachenko",
    name: names["dyachenko"],
    panoramaData: {
      imageSrc: "",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Григорий Дьяченко. Я играю на тубе в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Туба – самый молодой и самый низкий по звучанию инструмент духовой группы. Появился во второй четверти 19 века.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "tuba.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Самая лучшая примета – это выспаться и хорошо разыграться перед концертом.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Когда надо было играть контрабасовым смычком по раструбу инструмента.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "На концерте каждый момент незабываемый.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  koroticheva: {
    photoSrc: "koroticheva",
    name: names["koroticheva"],
    panoramaData: {
      imageSrc: "",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Ирина Коротичева. Я играю на альте в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Альт – это инструмент, очень похожий на скрипку, но лучше.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Он звучит немножко ниже и, конечно, куда красивей.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Ну или альт – это старший брат скрипки, они очень похожи. Так как звучит он немного ниже, он больше похож на человеческий голос.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "alt.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Перед выступлением нужно обязательно постараться выспаться.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Люблю, если случаются всякие мелкие неприятности в день концерта – верю, что если они произойдут до концерта, то их не будет во время выступления.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Однажды участвовали в съёмках передачи, где студенты под разную музыку решали задачки.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Мы играли им Моцарта, и они с нами делали меньше всего ошибок.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Под рок они решали быстрее, но много ошибались.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Однажды у меня была необычная партия: в симфонии мне надо было вовремя громко и томно вздохнуть.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Я тренировалась целый вечер перед этим.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
  plaksin: {
    photoSrc: "plaksin",
    name: names["plaksin"],
    panoramaData: {
      imageSrc: "",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "Здравствуйте! Меня зовут Евгений Плаксин. Я играю на валторне в симфоническом оркестре.",
      device: "any",
    },
    qa: {
      "Вопросы про инструмент артиста": {
        "Расскажите о Вашем инструменте": {
          messages: [
            {
              msgClass: "textMsg",
              msg: 'Валторна – медный духовой немецкий инструмент. Walt horn – пер. с немецкого как "Лесной рог". ',
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Это самый древний музыкальный инструмент, произошедший от охотничьих рогов.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Раньше он изготовлялся из рогов животных, морских раковин, из веток и стволов деревьев. Теперь это сплав латуни и нейзильбера.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Валторна – самый важный инструмент симфонического оркестра, который своим превосходным звучанием соединяет все группы в оркестре, отлично сливается со струнными и деревянными инструментами.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Валторна – самый сложный музыкальный инструмент, за это она введена в Книгу рекордов Гиннесса.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите о Вашем инструменте",
        },
        "Как звучит Ваш инструмент?": {
          messages: [
            { msgClass: "audioMsg", msg: "valtorna.mp3", device: "any" },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Как звучит Ваш инструмент?",
        },
      },
      "Ситуации из концертной жизни": {
        "Есть привычки перед выступлением?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Примет особых нет.",
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion:
            "Есть ли у вас какие-то приметы или особые привычки перед выступлением?",
        },
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Самый необычный эксперимент с музыкой был недавно, когда мы играли в ресторане Оскар от Филармонии.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Это было на очень маленькой сцене, где все еле поместились, даже без кучи инструментов в составе от  написанного Чайковским.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: 'Самое главное, сюиту "Вальс цветов" из музыки Чайковского к балету "Щелкунчик" мы исполняли без арфы.',
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Какой был самый необычный эксперимент с музыкой?",
        },
        "Незабываемый момент на концерте?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: 'Самый смешной момент был когда мы на детском концерте играли музыку Альфреда Шнитке –  Ревизскую сказку (Гоголь-сюиту), где в первом номере в конце звучит очень грозно мотив из Симфонии №5 Бетховена («Так судьба стучится в дверь») "ля.ля.ля.фа-", после этого громкого кто-то из детей в зале так громко закричал, как будто его убивают, конечно в шутку, просто побаловаться, и после этого весь оркестр с красными лицами не мог сдержать смеха, исполнение следующего номера из-за этого пришлось задержать.',
              device: "any",
            },
            {
              msgClass: "randomTextMsg",
              msg: "Хотите узнать что-нибудь еще?",
              randomList: somethingElse,
              device: "any",
            },
          ],
          fullQuestion: "Расскажите про незабываемый момент на концерте",
        },
      },
      finish: {
        "Нет, спасибо": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
          fullQuestion: "Нет, спасибо",
        },
      },
    },
  },
};
