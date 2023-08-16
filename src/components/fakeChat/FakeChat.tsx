import { IQASystem } from "@/types/QASystem.interface";
import { IMessage } from "@/types/message.interface";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect, useState } from "react";
import uuid from "react-uuid";
import PanoramaViewer from "../panoramaViewer/PanoramaViewer";
import { ChatBody, ChatBottom, ChatHeader } from "./chatComponents";
import { ChatBlurModal } from "./chatComponents/chatBlurModal";
import { deviceRecognizer } from "./lib";
import {
  ImgMsg,
  LinkMsg,
  TextAnswerMsg,
  TextQuestionMsg,
} from "./msgComponents";
import { AudioMsg } from "./msgComponents/audioMsg";

type statusMsgType = "печатает..." | "записывает аудио..." | "в сети";

const FakeChat = ({ data }: IQASystem) => {
  const [device, setDevice] = useState<"phone" | "desktop">();
  const [activeFinishButton, setActiveFinishButton] = useState<boolean>(false);
  const [answer, setAnswer] = useState(false);
  const [queue, setQueue] = useState<ReactElement[]>([]);
  const [questions, setQuestions] = useState<string[]>(Object.keys(data.qa));
  const [viewArtist, setViewArtist] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<statusMsgType>("в сети");
  const [activeBlur, setActiveBlur] = useState<boolean>(false);
  const [activeFlicker, setActiveFlicker] = useState<boolean>(false);

  const imageSrc = data.panoramaData.imageSrc;
  const initialPitch = data.panoramaData.pitch;
  const initialYaw = data.panoramaData.yaw;

  useEffect(() => {
    msgHandler([data.start], "start", 1000);
    setDevice(deviceRecognizer);
  }, []);

  function activateFlicker() {
    setActiveFlicker((prev) => !prev);
  }

  const { push } = useRouter();
  function returnToMainPage() {
    push("/");
  }

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
          setStatusMsg("в сети");
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
          setStatusMsg("в сети");
        }, 2000);
        return;
      }
    }
    switch (msgList[0].msgClass) {
      case "textMsg":
        setStatusMsg("печатает...");
        pendAdding(
          msgList,
          element,
          t,
          <TextAnswerMsg key={uuid()}>{msgList[0].msg}</TextAnswerMsg>
        );
        break;
      case "audioMsg":
        setStatusMsg("записывает аудио...");
        pendAdding(
          msgList,
          element,
          t,
          <AudioMsg
            key={uuid()}
            audioUrl={"sound/" + msgList[0].msg}
          ></AudioMsg>
        );
        break;
      case "imgURL":
        setStatusMsg("печатает...");
        pendAdding(
          msgList,
          element,
          t,
          <ImgMsg url={msgList[0].msg.normalize()} key={uuid()}></ImgMsg>
        );
        break;
      case "linkMsg":
        setStatusMsg("печатает...");
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
      <ChatBlurModal
        activateFlicker={activateFlicker}
        activeBlur={activeBlur}
        activeFlicker={activeFlicker}
        changeView={changeView}
      ></ChatBlurModal>

      <div className="flex flex-col h-full w-[39.65%] absolute right-0 z-10 ">
        <ChatHeader
          musicianName={data.name}
          statusMsg={statusMsg}
          returnToMainPage={returnToMainPage}
        ></ChatHeader>
        <ChatBody
          activeFinishButton={activeFinishButton}
          answer={answer}
          changeView={changeView}
          handleClick={handleClick}
          questions={questions}
          queue={queue}
        ></ChatBody>
        <ChatBottom></ChatBottom>
      </div>
      {viewArtist && (
        <PanoramaViewer
          imageSrc={imageSrc}
          yaw={initialYaw}
          pitch={initialPitch}
        />
      )}
    </>
  );
};

export default FakeChat;
