import localFont from "next/font/local";
import { ReactElement, useEffect, useState } from "react";
import uuid from "react-uuid";
import { QASystemType, msgType } from "./QASystem";
import ImgMsg from "./msgComponents/ImgMsg";

import ArtistPanorama from "../artistPanorama/ArtistPanorama";
import TextAnswerMsg from "./msgComponents/TextAnswerMsg";
import TextQuestionMsg from "./msgComponents/TextQuestionMsg";

const geometriaRegular = localFont({ src: "../../fonts/Geometria.ttf" });
const geometriaBold = localFont({ src: "../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({ src: "../../fonts/Geometria-Medium.woff" });

type waitingMsgType = "...печатает" | "...записывает аудио" | "в сети";

const FakeChat = ({ data }: QASystemType) => {
  const [activeFinishButton, setActiveFinishButton] = useState<boolean>(false);
  const [answer, setAnswer] = useState(false);
  const [queue, setQueue] = useState<ReactElement[]>([]);
  const [questions, setQuestions] = useState<string[]>(Object.keys(data.qa));
  const [viewArtist, setViewArtist] = useState<boolean>(false);
  const [waitingMsg, setWaitingMsg] = useState<waitingMsgType>("в сети");

  useEffect(() => {
    msgHandler([data.start], "start", 1000);
  }, []);

  function msgHandler(msgList: msgType[], element: string, t = 3000) {
    setWaitingMsg("...печатает");
    setAnswer(false);
    let toAddQueue: ReactElement[] = [];
    switch (msgList[0].msgClass) {
      case "textMsg":
        toAddQueue = [
          <TextAnswerMsg key={uuid()}>{msgList[0].msg}</TextAnswerMsg>,
        ];
        break;
      case "audioMsg":
        toAddQueue = [<div key={uuid()}>audioMsg</div>];
        break;
      case "imgURL":
        toAddQueue = [
          <ImgMsg url={msgList[0].msg.normalize()} key={uuid()}></ImgMsg>,
        ];
        break;
      case "musicianPos":
        setAnswer(true);
        setWaitingMsg("в сети");
        clickToViewArtist();
        return;
      default:
        break;
    }
    msgList.splice(0, 1);
    if (msgList.length != 0) {
      setTimeout(() => {
        setQueue((prev) => [...prev, ...toAddQueue]);
        msgHandler(msgList, element);
      }, t);
    } else {
      setTimeout(() => {
        setQueue((prev) => [...prev, ...toAddQueue]);
        setTimeout(() => {
          if (element === "Нет, спасибо") {
            setAnswer(false);
          } else {
            setAnswer(true);
          }
          setWaitingMsg("в сети");
        }, 2000);
      }, t);
    }
  }

  function handleClick(element: string) {
    setActiveFinishButton(true);
    setAnswer(false);
    setQueue((prev) => [
      ...prev,
      <TextQuestionMsg key={uuid()}> {element} </TextQuestionMsg>,
    ]);
    const newQuestions = [...questions].filter((t) => t != element);
    msgHandler(data.qa[element], element);
    setQuestions(newQuestions);
  }

  function clickToViewArtist() {
    setViewArtist((prev) => (prev = !prev));
  }

  return (
    <>
      <div
        className={`flex flex-col h-full w-[39.65%] absolute right-0 z-10 ${
          viewArtist ? "" : null
        }`}
      >
        <button className="absolute blur-0 top-60 bg-red-700">Привет</button>
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
                className=" text-[28px] text-raspberryPink leading-normal tracking-[-0.41px] hidden 2xl:block ml-2"
              >
                Назад
              </span>
            </div>

            <div className="flex flex-col items-center pt-1 3xl:pt-2">
              <span
                style={geometriaBold.style}
                className="text-[#141414]  xl:text-[28px] text-[22px] leading-[20px] tracking-[-0.32px]"
              >
                {data.name}
              </span>
              <span
                style={geometriaMedium.style}
                className=" text-[#D93284] 3xl:pt-1"
              >
                {waitingMsg}
              </span>
            </div>

            <img
              src="headset.svg"
              className="ml-[7%] lg:h-[42px] h-[28px]"
              alt="Прослушать"
            />
          </div>
        </div>

        <div className="w-full h-[82.6%] bg-white z-0 flex flex-col-reverse px-[24px] pb-[24px] overflow-y-auto no-scrollbar">
          <div className="flex flex-col justify-end">
            <div
              className={`mb-[24px] py-[15px] rounded-tl-lg rounded-tr-lg rounded-br-lg`}
            >
              {queue.map((item) => (
                <div key={uuid()}>{item}</div>
              ))}
            </div>

            {answer && (
              <div className={"w-full flex flex-col items-end"}>
                {questions.map((t) => {
                  if (!activeFinishButton && t === "Нет, спасибо") {
                    return <></>;
                  }
                  return (
                    <div key={uuid()} className="group">
                      <button
                        style={geometriaBold.style}
                        className="flex flex-start w-[450px] mb-[14px] border-[3px] rounded-[18px] border-[#F060C0] group-active:bg-[#FAEBEB] transition-all"
                        onClick={() => {
                          handleClick(t);
                        }}
                      >
                        <span className="group-active:text-[#D93284] transition-all text-[#222] text-[24px] p-3 ml-3">
                          {t}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="border-t-chatBorder border-t-2 w-full h-[8.85%] bg-bottomBar sm:rounded-bl-[16px] 2xl:rounded-bl-[32px] z-10 flex flex-col justify-center align-middle "></div>
      </div>
      {viewArtist && <ArtistPanorama />}
    </>
  );
};

export default FakeChat;
