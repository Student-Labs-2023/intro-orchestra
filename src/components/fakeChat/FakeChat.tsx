import { IQASystem } from "@/types/QASystem.interface";
import { IMessage } from "@/types/message.interface";
import localFont from "next/font/local";
import { ReactElement, useEffect, useState } from "react";
import uuid from "react-uuid";
import ArtistPanorama from "../artistPanorama/ArtistPanorama";
import { deviceRecognizer } from "./lib";
import {
  Button,
  ImgMsg,
  LinkMsg,
  TextAnswerMsg,
  TextQuestionMsg,
} from "./msgComponents";

const geometriaRegular = localFont({ src: "../../fonts/Geometria.ttf" });
const geometriaBold = localFont({ src: "../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({ src: "../../fonts/Geometria-Medium.woff" });

type waitingMsgType = "печатает..." | "записывает аудио..." | "в сети";

const FakeChat = ({ data }: IQASystem) => {
  const [device, setDevice] = useState<"phone" | "desktop">();
  const [activeFinishButton, setActiveFinishButton] = useState<boolean>(false);
  const [answer, setAnswer] = useState(false);
  const [queue, setQueue] = useState<ReactElement[]>([]);
  const [questions, setQuestions] = useState<string[]>(Object.keys(data.qa));
  const [viewArtist, setViewArtist] = useState<boolean>(false);
  const [waitingMsg, setWaitingMsg] = useState<waitingMsgType>("в сети");
  const [activeBlur, setActiveBlur] = useState<boolean>(false);

  useEffect(() => {
    msgHandler([data.start], "start", 1000);
    setDevice(deviceRecognizer);
  }, []);

  function pendAdding(
    msgList: IMessage[],
    element: string,
    t = 3000,
    toAddQueue: ReactElement
  ) {
    msgList.splice(0, 1);
    if (msgList.length != 0) {
      setTimeout(() => {
        setQueue((prev) => [...prev, toAddQueue]);
        msgHandler(msgList, element);
      }, t);
    } else {
      setTimeout(() => {
        setQueue((prev) => [...prev, toAddQueue]);
        setTimeout(() => {
          setAnswer(element != "Нет, спасибо");
          setWaitingMsg("в сети");
        }, 2000);
      }, t);
    }
  }

  function msgHandler(msgList: IMessage[], element: string, t = 3000) {
    setAnswer(false);

    while (!(msgList[0].device == device || msgList[0].device == "any")) {
      msgList.splice(0, 1);
      if (!msgList.length) {
        setTimeout(() => {
          setAnswer(element != "Нет, спасибо");
          setWaitingMsg("в сети");
        }, 2000);
        return;
      }
    }
    switch (msgList[0].msgClass) {
      case "textMsg":
        setWaitingMsg("печатает...");
        pendAdding(
          msgList,
          element,
          t,
          <TextAnswerMsg key={uuid()}>{msgList[0].msg}</TextAnswerMsg>
        );
        break;
      case "audioMsg":
        setWaitingMsg("записывает аудио...");
        pendAdding(msgList, element, t, <div key={uuid()}>audioMsg</div>);
        break;
      case "imgURL":
        setWaitingMsg("печатает...");
        pendAdding(
          msgList,
          element,
          t,
          <ImgMsg url={msgList[0].msg.normalize()} key={uuid()}></ImgMsg>
        );
        break;
      case "linkMsg":
        setWaitingMsg("печатает...");
        pendAdding(
          msgList,
          element,
          t,
          <LinkMsg href={msgList[0].msg.normalize()} key={uuid()}></LinkMsg>
        );
        break;
      default:
        break;
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

  function changeView(t: string | undefined) {
    setActiveBlur((prev) => (prev = !prev));
    setViewArtist((prev) => (prev = !prev));
  }

  return (
    <>
      {activeBlur && (
        <div className="flex flex-col items-center justify-center h-full w-[39.65%] absolute right-0 z-30 backdrop-blur-md sm:rounded-tl-[16px] 2xl:rounded-tl-[32px] sm:rounded-bl-[16px] 2xl:rounded-bl-[32px]">
          <Button onClick={changeView} variant="pink">
            вернуться к диалогу
          </Button>
        </div>
      )}
      <div className="flex flex-col h-full w-[39.65%] absolute right-0 z-10">
        <div className="w-full h-[8.55%] bg-white sm:rounded-tl-[16px] 2xl:rounded-tl-[32px] shadow-topBar z-10 flex flex-col justify-center">
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
                className="text-[#141414]  xl:text-[28px] lg:text-[22px] text-[16px] xl:leading-[20px] lg:leading-[16px] leading-[12px] tracking-[-0.32px] "
              >
                {data.name}
              </span>
              <span
                style={geometriaMedium.style}
                className=" text-[#D93284] 3xl:pt-1 text-[11px] xl:text-[18px] lg:text-[14px]"
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

        <div className="w-full h-[82.6%] bg-white z-0 flex flex-col-reverse px-[24px] lg:pb-[24px] pb-[6px] overflow-y-auto no-scrollbar">
          <div className="flex flex-col justify-end">
            <div
              className={`lg:mb-[24px]  mb-[6px] py-[15px] rounded-tl-lg rounded-tr-lg rounded-br-lg`}
            >
              {queue.map((item) => (
                <div key={uuid()}>{item}</div>
              ))}
            </div>

            {answer && (
              <div className={"w-full flex flex-col items-end"}>
                <Button key={uuid()} onClick={changeView} variant="white">
                  Посмотреть глазами музыканта
                </Button>
                {questions.map((t) => {
                  if (!activeFinishButton && t === "Нет, спасибо") {
                    return;
                  }
                  return (
                    <Button key={uuid()} onClick={handleClick} variant="white">
                      {t}
                    </Button>
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
