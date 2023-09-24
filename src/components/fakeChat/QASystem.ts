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
              msg: "Дирижёр не играет музыку – играют музыканты оркестра, их отдача и вдохновение зависят от того, насколько дирижёр убедителен в дирижировании.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Он транслирует свои идеи оркестру с помощью жестов и слов.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "В жестах есть рисунки, понятные музыкантам, а также темп, динамика, штрихи, фразировка и характер музыки.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "В процессе дирижирования дирижёр внимательно слушает оркестр и корректирует его звучание в соответствии с замыслом.",
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
              msg: "Это инструмент, созданный по модели скрипки знаменитого французского мастера XIX-го века Жана Батиста Вильома.",
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
              msg: "Особых привычек у меня нет, я настраиваюсь на выступление и прорабатываю наиболее сложные места из предстоящего концерта.",
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
              msg: "Непредвиденные ситуации на концертах случаются: рвутся струны, падают ноты, садятся батарейки в подсветке на пюпитре и т.д.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Однажды на концерте у солиста-скрипача расстроилась скрипка, и он доигрывал произведение на моем инструменте.",
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
              msg: "Арфа – древний струнный щипковый инструмент, однако современный вид концертная арфа приобрела только в начале XIX века с изобретением двойного педального механизма.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "В настоящее время у концертной арфы 47 струн и 7 педалей, которые используются для повышения или понижения звучания струн (диезы, бемоли).",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Таким образом, музыкант играет на арфе не только руками, но и ногами.",
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
              msg: "У меня нет особых примет или привычек перед выступлением.",
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
              msg: "Самым необычным экспериментом была игра на арфе с помощью пластиковой карты)",
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
              msg: 'Однажды произошел совершенно ужасный момент на концерте-сказке "Русалочка".',
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Вообще сказки Андерсена чаще всего пронзительно грустные, а тут ещё и музыка...",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Надо было играть в тот момент, когда Русалочка превращается в пену, а у меня слезы на глазах!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Не знаю, что тогда подумал дирижер.)) Не люблю Андерсена.)",
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
              msg: "Кларнет - это деревянный духовой инструмент, имеющий большой тембровый и звуковысотный диапазон.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "В симфоническом оркестре он нередко используется в качестве солирующего инструмента, его можно услышать также в джазовой и клезмерской музыке и в эстраде.",
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
              msg: "У меня нет примет или привычек перед выступлением.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Чтобы настроиться на выступление, я стараюсь отстраниться от окружающего и успокоиться.",
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
              msg: "Необычным экспериментом было озвучивание немого кино Чарли Чаплина в составе небольшого оркестра в зале кинотеатра.",
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
              msg: "На фестивале «Звёзды на Байкале 2014» Денис Мацуев поменял местами программы, и мне пришлось срочно прибыть в концертный зал и играть «Рапсодию в стиле блюз» Гершвина, которая начинается с развёрнутого вступления кларнета, без репетиции.",
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
              msg: "Контрабас – самый низкий по звучанию инструмент из семейства струнных, в оркестре появился в середине XVII-го века.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Он бывает 4-х и 5-ти струнным с квартовым строем! На контрабасе можно играть смычком и пиццикато!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Помимо симфонического и камерного оркестров, контрабас приветствуют в различных ансамблях как для классических, так и для современных композиций в сочетании с разными инструментами, в том числе электронными)",
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
              msg: "Я предпочитаю в день концерта приезжать за час до выступления, чтобы разыграться и настроить инструмент!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "За 10-15 минут до выступления нахожусь за кулисами в относительной тишине), насыщаясь энергией заполняемого зрителями зала!",
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
              msg: "Современные композиторы постоянно ищут новые способы донесения информации, извлекая звуки из классических инструментов разными приёмами: стуками, скрежетами, свистами и т.д.!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "В моей практике было много необычных произведений, в которых использовались такие приемы!",
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
              msg: "За 23 сезона моей карьеры контрабасиста  до сих пор у меня  самые сильные эмоции  вызывает реакция полностью заполненного зала как на гастролях в других странах, так и в родном городе!",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Самое ценное для артистов – это громкие нескончаемые овации довольной публики и неизменное посещение наших концертов!",
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
              msg: "Привычек или примет у меня нет, но есть подготовительные моменты, такие как разыгрывание и концентрация внимания перед выступлением.",
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
              msg: "Лучший эксперимент в инструментальной музыке – это ансамбль. ",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Самое неожиданное сочетание инструментов порождает неповторимые тембры.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Вот, например, мы с коллегами-флейтистами раздобыли ноты трио для флейты, флейты пикколо и альтовой флейты.",
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
              msg: "Самый незабываемый концерт в нашем оркестре прошел в Красноярской филармонии в 2019 году.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Мы исполняли 7-ю симфонию Бетховена, и это была неповторимая энергетика как со стороны слушателей, так и со стороны оркестра.",
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
              msg: "Фагот – деревянный духовой инструмент (низкий голос среди всех деревянных). Создан в XVI веке.",
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
              msg: "Незабываемые моменты - это детские эмоции: когда ребенок, увидев и услышав инструмент, восхищается.",
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
              msg: "Как правило, первые скрипки играют основную мелодию (тему), а вторые скрипки аккомпанируют первым, дублируют их партию в октаву, унисон или другой интервал.",
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
              msg: "Самая распространенная примета музыкантов: если перед выступлением уронил ноты, нужно на них посидеть.",
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
              msg: "Каждый сезон происходит что-то интересное, возникают неожиданные и незабываемые проекты.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Особенно запомнилось, как для исполнения симфонии Джона Корельяно мне пришлось осваивать мандолину.",
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
              msg: "Незабываемым моментом для меня стало исполнение гимна России в Газпром Арене (г. Санкт-Петербург), тогда восемь тысяч музыкантов исполняли его вместе - это было впечатляюще!",
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
              msg: "Труба – выразительный и самый яркий инструмент.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Первые трубы появились в 1500 году до нашей эры, а сейчас ни одно направление в музыке не обходится без трубы.",
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
              msg: "Приём пищи – не позднее, чем за три часа до концерта, и ни в коем случае не употреблять солёную рыбу :)",
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
              msg: "Однажды получилось так, что перед очень ответственным концертом  мы не спали почти двое суток.",
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
              msg: "Всегда играл только по нотам. Но, как-то выйдя на сцену, я понял, что забыл очки.",
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
              msg: "Ударные инструменты - это самые древние музыкальные инструменты и обладают наибольшим разнообразием.",
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
              msg: "У меня есть привычка разыгрываться перед выступлением.",
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
              msg: "Как-то играл концерт дуэтом – рояль и ударные.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Мне также пришлось сочинять свои партии, чтобы с помощью барабанной устрановки сымитировать народные инструменты и бас.",
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
              msg: "Незабываемым стал момент, когда во время концерта в Концзале на впереди сидящих музыкантов упал звукоизолирующий щит для барабанов.",
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
              msg: "Тромбон – это медный духовой инструмент, известен с XV века.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Звуковой колорит тромбона очень богат: он может быть мужественным, ярким и грозным, а может быть спокойным и лиричным.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Изначально инструмент использовался в церковных произведениях.  Людвиг ван Бетховен говорил, что голос тромбона – это голос Бога.",
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
              msg: "Для меня постоянные выступления и ежедневные занятия на тромбоне – это моя жизнь, где предмет – это тромбон, а привычка – это занятия на тромбоне.",
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
              msg: "Литавры – ударный музыкальный инструмент с определённой высотой звучания. ",
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
              msg: "Перед выступлением я всегда подстраиваю инструмент, так как в зависимости от температуры, влажности и давления литавры могут высить или низить.",
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
              msg: "Экспериментов с ударными было много: играл на посуде, на металлических бочках, ножами по крышкам и т.д.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Был необычный опыт, когда темп в произведении задавал стук сердца: подключали микрофоны к человеку, и за счет дыхания и напряжения в мышцах темп то ускорялся, то замедлялся...",
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
              msg: "Однажды  мне пришлось играть концерт без нот.",
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
              msg: "Туба – самый молодой и низкий по звучанию инструмент духовой группы. Появился во второй четверти XIX века.",
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
              msg: "Самое лучшее - это выспаться и хорошо разыграться перед концертом.",
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
              msg: "Он звучит немного ниже и красивее.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "По-другому, альт – это старший брат скрипки, они очень похожи. Своим звучанием он больше похож на человеческий голос.",
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
              msg: "Перед выступлением нужно обязательно выспаться.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "К тому же, если случаются всякие мелкие неприятности в день концерта, я верю, что так как они происходят до концерта, то их не будет во время выступления.",
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
              msg: "Однажды  мы участвовали в съёмках передачи, где студенты решали задачи под разную музыку.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Мы играли им Моцарта, и они  делали меньше ошибок, а под рок они решали быстрее, но много ошибались.",
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
              msg: "Однажды у меня была необычная партия: в симфонии в одном моменте мне надо было громко и томно вздохнуть.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Перед этим я тренировалась весь вечер!",
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
              msg: "Валторна – медный духовой инструмент.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: 'Walt horn – пер. с немецкого как "Лесной рог".',
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Раньше он изготовлялся из рогов животных, морских раковин, деревьев, теперь это сплав латуни и нейзильбера.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Валторна – самый важный инструмент симфонического оркестра, который своим звучанием соединяет все группы в оркестре, отлично сливается со струнными и деревянными инструментами.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "Валторна также самый сложный музыкальный инструмент, за это она введена в Книгу рекордов Гиннесса.",
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
        "Необычный эксперимент с музыкой?": {
          messages: [
            {
              msgClass: "textMsg",
              msg: "Самый необычный эксперимент был тогда, когда мы играли на очень маленькой сцене, где еле помещались музыканты, даже в неполном составе от написанного композитором.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: 'Самое главное, мы исполняли сюиту "Вальс цветов" из балета "Щелкунчик" П.И.Чайковского без арфы.',
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
              msg: "Самый смешной момент был, когда мы на детском концерте играли музыку Альфреда Шнитке –  Ревизскую сказку (Гоголь-сюиту), где в первом номере в конце грозно звучит мотив из Симфонии №5 Бетховена, после этого кто-то из детей в зале так громко закричал, как будто его убивают, конечно, в шутку.",
              device: "any",
            },
            {
              msgClass: "textMsg",
              msg: "После этого весь оркестр с красными лицами не мог сдержать смеха, исполнение следующего номера пришлось задержать.))",
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
