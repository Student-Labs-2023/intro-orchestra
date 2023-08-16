import { IQASystem } from "@/types/QASystem.interface";

interface INames {
  [nameId: string]: string;
}

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
  shitov: "Денис Шитов",
  plaksin: "Евгений Плаксин",
  koroticheva: "Ирина Коротичева",
  bogov: "Никита Богов",
};

export const QASystem: IQASystem = {
  vasiliev: {
    name: names["vasiliev"],
    panoramaData: {
      imageSrc: "/panorama-images/vasiliev-panorama.jpg",
      yaw: 170,
      pitch: -30,
    },
    start: {
      msgClass: "textMsg",
      msg: "NaN",
      device: "any",
    },
    qa: {
      "Как вы стали дирижером?": [
        {
          msgClass: "textMsg",
          msg: "NaN",
          device: "any",
        },
      ],
      "Посмотреть на вашу работу": [
        {
          msgClass: "textMsg",
          msg: "NaN ДОБАВИТЬ ВИДЕО И VIDEOMSG",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Необычный эксперимент с музыкой?": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Незабываемый момент на концерте?": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
    name: names["butorina"],
    panoramaData: {
      imageSrc: "/panorama-images/butorina-panorama.jpg",
      yaw: 0,
      pitch: 0,
    },
    start: {
      msgClass: "textMsg",
      msg: "NaN",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
        {
          msgClass: "textMsg",
          msg: "Считается, что виолончель по своему тембру ближе всего к человеческому голосу.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Неслучайно даже в киномузыке, чтобы передать большую глубину чувств, композиторы часто к ней обращаются: «Интерстеллар», «Семь лет в Тибете», «Жанна Дюбари».",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "В оркестре она выполняет преимущественно две роли: роль основы, басового голоса наравне с контрабасом, и мелодической линии, не уступая первым скрипкам.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "cello.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
        {
          msgClass: "textMsg",
          msg: "У меня нет особых привычек и примет перед выступлением вроде тех, чтобы поплевать через левое плечо или сесть пятой точкой на упавшие на пол ноты.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Когда переоблачаешься в концертный костюм, сразу чувствуешь себя по-другому.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
        {
          msgClass: "textMsg",
          msg: "Необычных экспериментов с музыкой было так много, что сложно выделить что-то одно.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Одним из самых запоминающихся было исполнение дуэтом с моей коллегой-виолончелисткой песни рок-группы AC/DC в сопровождении симфонического оркестра под управлением нашего главного дирижера Дмитрия Васильева.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
        {
          msgClass: "textMsg",
          msg: "Музыка – великое искусство. Наша профессия тесно связана с эмоциями, поэтому каждый момент соприкосновения с этим волшебством становится незабываемым.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Так же как в одну реку нельзя войти дважды, так и каждое исполнение в определенный момент времени уникально.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
    name: names["lopatin"],
    panoramaData: {
      imageSrc: "/panorama-images/lopatin-panorama.jpg",
      yaw: 30,
      pitch: -5,
    },
    start: {
      msgClass: "textMsg",
      msg: "NaN",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "violin.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
    name: names["romanova"],
    panoramaData: {
      imageSrc: "/panorama-images/romanova-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "harp.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
  stepancev: {
    name: names["stepancev"],
    panoramaData: {
      imageSrc: "/panorama-images/antonov-panorama.jpg",
      yaw: 140,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "clarinet.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
        {
          msgClass: "textMsg",
          msg: "Необычным экспериментом было озвучивание в составе небольшого оркестра немое кино Чарли Чаплина в большом зале кинотеатра.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
    name: names["antonov"],
    panoramaData: {
      imageSrc: "/panorama-images/antonov-panorama.jpg",
      yaw: 140,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "double_bass.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
    name: names["zaitsev"],
    panoramaData: {
      imageSrc: "/panorama-images/zaitsev-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "flute.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
        {
          msgClass: "textMsg",
          msg: "Особых привычек нет. Но есть подготовительные моменты. Такие как разыгрывание (исполнение определенных упражнений) и концентрация внимания перед выступлением.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
    name: names["podshivalov"],
    panoramaData: {
      imageSrc: "/panorama-images/podshivalov-panorama.jpg",
      yaw: -120,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
        {
          msgClass: "textMsg",
          msg: "Фагот – деревянный духовой инструмент (низкий голос среди всех деревянных). Создан в 16 веке.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "bassoon.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
        {
          msgClass: "textMsg",
          msg: "Перед выступлением думаю о музыке, которую предстоит исполнять.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
        {
          msgClass: "textMsg",
          msg: "Когда современные композиторы просят играть на одной части инструмента.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
        {
          msgClass: "textMsg",
          msg: "Это детские эмоции: когда ребенок, увидев и услышав инструмент, восхищается.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
    name: names["lunin"],
    panoramaData: {
      imageSrc: "/panorama-images/lunin-panorama.jpg",
      yaw: -180,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
        {
          msgClass: "textMsg",
          msg: "Как правило, первые скрипки играют основную мелодию (тему), а вторые чаще аккомпонируют первым, дублируют их партию в октаву, унисон или другой интервал.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "violin.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
        {
          msgClass: "textMsg",
          msg: "Для меня незабываемым моментом было исполнение гимна России в Газпром Арене (г. Санкт-Петербург), когда восемь тысяч музыкантов исполняли его одновременно, необыкновенный момент.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
    name: names["butikov"],
    panoramaData: {
      imageSrc: "/panorama-images/butikov-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "pipe.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
    name: names["sesonov"],
    panoramaData: {
      imageSrc: "/panorama-images/sesonov-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "drum_kit.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
  bogov: {
    name: names["bogov"],
    panoramaData: {
      imageSrc: "/panorama-images/bogov-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "nan.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
        {
          msgClass: "textMsg",
          msg: "Нет, потому что постоянные выступления и ежедневные занятия на тромбоне – это моя жизнь, где предмет – это тромбон, а привычка – это занятия на тромбоне.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
    name: names["orynbaev"],
    panoramaData: {
      imageSrc: "/panorama-images/orynbaev-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "timpani.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
  dyachenko: {
    name: names["dyachenko"],
    panoramaData: {
      imageSrc: "/panorama-images/dyachenko-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
        {
          msgClass: "textMsg",
          msg: "Туба – самый молодой и самый низкий по звучанию инструмент духовой группы. Появился во второй четверти 19 века.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "tuba.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
        {
          msgClass: "textMsg",
          msg: "Самая лучшая примета – это выспаться и хорошо разыграться перед концертом.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
        {
          msgClass: "textMsg",
          msg: "Когда надо было играть контрабасовым смычком по раструбу инструмента.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
        {
          msgClass: "textMsg",
          msg: "На концерте каждый момент незабываемый.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
  shitov: {
    name: names["shitov"],
    panoramaData: {
      imageSrc: "/panorama-images/shitov-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "timpani.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
        {
          msgClass: "textMsg",
          msg: "nan",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
  koroticheva: {
    name: names["koroticheva"],
    panoramaData: {
      imageSrc: "/panorama-images/koroticheva-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "nan.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
  plaksin: {
    name: names["plaksin"],
    panoramaData: {
      imageSrc: "/panorama-images/plaksin-panorama.jpg",
      yaw: 160,
      pitch: -15,
    },
    start: {
      msgClass: "textMsg",
      msg: "nan",
      device: "any",
    },
    qa: {
      "Расскажите о Вашем инструменте": [
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
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Как звучит Ваш инструмент?": [
        { msgClass: "audioMsg", msg: "nan.wav", device: "any" },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Есть привычки перед выступлением?": [
        {
          msgClass: "textMsg",
          msg: "Примет особых нет.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Каким был самый необычный эксперимент с музыкой?": [
        {
          msgClass: "textMsg",
          msg: "Самый необычный эксперимент с музыкой был недавно, когда мы играли в ресторане Оскар от Филармонии.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Это было на очень маленький сцене, где все еле поместились, даже без кучи инструментов в составе от  написанного Чайковским.",
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: 'Самое главное, сюиту "Вальс цветов" из музыки Чайковского к балету "Щелкунчик" мы исполняли без арфы.',
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Расскажите про незабываемый момент на концерте": [
        {
          msgClass: "textMsg",
          msg: 'Самый смешной момент был когда мы на детском концерте играли музыку Альфреда Шнитке –  Ревизскую сказку (Гоголь-сюиту), где в первом номере в конце звучит очень грозно мотив из Симфонии №5 Бетховена («Так судьба стучится в дверь») "ля.ля.ля.фа-", после этого громкого кто-то из детей в зале так громко закричал, как будто его убивают, конечно в шутку, просто побаловаться, и после этого весь оркестр с красными лицами не мог сдержать смеха, исполнение следующего номера из-за этого пришлось задержать.',
          device: "any",
        },
        {
          msgClass: "textMsg",
          msg: "Хотите узнать что-нибудь еще?",
          device: "any",
        },
      ],
      "Нет, спасибо": [
        {
          msgClass: "textMsg",
          msg: "Тогда будем рады видеть Вас на наших концертах! Ниже можно отсканировать QR-код или перейти на сайт с афишей предстоящих мероприятий.",
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
