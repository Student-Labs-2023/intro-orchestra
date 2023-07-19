import localFont from "next/font/local";
import { ReactElement, useEffect, useState } from "react";
import uuid from "react-uuid";
import { QASystemType, msgType } from "./QASystem";

const geometriaRegular = localFont({ src: "../../fonts/Geometria.ttf" });
const geometriaBold = localFont({ src: "../../fonts/Geometria-Bold.woff" });

type waitingMsgType = "...печатает" | "...записывает аудио";

const FakeChat = ({ data }: QASystemType) => {
  const [answer, setAnswer] = useState(false);

  const [queue, setQueue] = useState<ReactElement[]>([]);

  const [questions, setQuestions] = useState<string[]>(Object.keys(data.qa));

  useEffect(() => {
    msgHandler([data.start], 1000);
  }, []);

  function msgHandler(msgList: msgType[], t = 3000) {
    setAnswer(false);
    let toAddQueue: ReactElement[] = [];
    switch (msgList[0].msgClass) {
      case "textMsg":
        toAddQueue = [<div key={uuid()}>{msgList[0].msg}</div>];
        break;
      case "audioMsg":
        toAddQueue = [<div key={uuid()}>audioMsg</div>];
        break;
      case "imgURL":
        toAddQueue = [<div key={uuid()}>img</div>];
        break;
      case "musicianPos":
        toAddQueue = [<div key={uuid()}>musicianPos</div>];
        break;
      default:
        break;
    }
    msgList.splice(0, 1);
    if (msgList.length != 0) {
      setTimeout(() => {
        setQueue((prev) => [...prev, ...toAddQueue]);
        msgHandler(msgList);
      }, t);
    } else {
      setTimeout(() => {
        setQueue((prev) => [...prev, ...toAddQueue]);
        setTimeout(() => {
          setAnswer(true);
        }, 2000);
      }, t);
    }
  }

  function handleClick(element: string) {
    setAnswer(false);

    const newQuestions = [...questions].filter((t) => t != element);
    msgHandler(data.qa[element]);
    setQuestions(newQuestions);
  }

  return (
    <div className="flex flex-col h-full w-[39.65%] absolute right-0">
      <div className="w-full h-[8.55%] bg-white rounded-tl-[30px] shadow-topBar z-10 flex flex-col justify-center">
        <div className="flex flex-row items-center justify-between p-4 ml-[10px] ">
          <div className="flex flex-row items-center justify-evenly">
            <img
              src="chevron.left.svg"
              className="lg:h-[29px] h-[21px]"
              alt="Вернуться назад"
            />

            <span
              style={geometriaRegular.style}
              className="text-[28px] text-raspberryPink leading-normal tracking-[-0.41px] hidden 2xl:block ml-2"
            >
              Назад
            </span>
          </div>

          <span
            style={geometriaBold.style}
            className="text-[#141414] 2xl:text-[36px] xl:text-[28px] text-[22px] leading-[20px] tracking-[-0.32px] justify-center pl-4"
          >
            {data.name}
          </span>

          <img
            src="headset.svg"
            className="ml-[7%] lg:h-[42px] h-[28px]"
            alt="Прослушать"
          />
        </div>
      </div>
      <div className="w-full h-[82.6%] bg-white z-0 flex flex-col justify-end px-[24px] pb-[24px]">
        <div
          className={`mb-[24px] max-w-[568px] py-[15px] rounded-tl-lg rounded-tr-lg rounded-br-lg`}
        >
          {queue.map((item) => (
            <div key={uuid()}>{item}</div>
          ))}
        </div>
        {answer && (
          <div className={"w-[100%] flex flex-col items-end"}>
            {questions.map((t) => {
              return (
                <button
                  style={geometriaBold.style}
                  className="block py-[15px] w-[450px] mb-[14px]  border-[3px] rounded-[18px] border-[#F060C0]"
                  key={uuid()}
                  onClick={() => {
                    handleClick(t);
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div className="border-t-chatBorder border-t-2 w-full h-[8.85%] bg-bottomBar sm:rounded-bl-[16px] 2xl:rounded-bl-[32px] z-10 flex flex-col justify-center align-middle ">
        <div className="bg-[#f9f9f9] rounded-[18px] w-[93.8%] h-[66.7%] xl:ml-[24px] ml-[14px] flex flex-col justify-center">
          <span
            style={geometriaRegular.style}
            className="leading-[32px] tracking-[-0.41px] text-[#CCC] lg:text-[20px] 2xl:text-[26px] 2xl:ml-[18px] 3xl:text-[32px] xl:ml-[24px] ml-[14px]"
          >
            Сообщение
          </span>
        </div>
      </div>
    </div>
  );
};

export default FakeChat;
