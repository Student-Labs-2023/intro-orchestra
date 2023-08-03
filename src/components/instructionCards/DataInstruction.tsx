export interface ICard {
  id: string;
  title: string;
  desc: string;
}


export const cardsData: ICard[] = [
  {
    id: "card1",
    title: "Просмотр окружения в 360°",
    desc: "Чтобы исследовать сцену с симфоническим оркестром Филармонии, проведите по экрану для изменения направления обзора.",
  },
  {
    id: "card2",
    title: "Диалог с музыкантом",
    desc: `Чтобы пообщаться с артистом, нажмите на его цветную метку для перехода в диалог. В диалоге выберите интересующие вопросы.`,
  },
  {
    id: "card3",
    title: "Звучание музыкального инструмента",
    desc: "Чтобы прослушать игру музыканта, в диалоге выберите пункт «Как звучит твой инструмент?». Для прослушивания наденьте наушники.",
  },
  {
    id: "card4",
    title: "Сцена глазами музыканта",
    desc: 'Чтобы оказаться на месте музыканта, выберите пункт диалога "Посмотреть глазами музыканта". Изучите сцену, изменяя обзор.',
  },
];

export const buttonsData: string[] = ["card1", "card2", "card3", "card4"];
  