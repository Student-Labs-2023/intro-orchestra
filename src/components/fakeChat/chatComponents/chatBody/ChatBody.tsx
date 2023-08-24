import { IMessage } from "@/types/message.interface";
import { ReactElement, useState } from "react";
import uuid from "react-uuid";
import ChatVideoPlayer from "../../chatVideoPlayer/ChatVideoPlayer";
import { Button } from "../../msgComponents";

interface IChatBody {
  queue: ReactElement[];
  answer: boolean;
  changeView: (t: string | undefined) => void;
  questions: ICategory;
  activeFinishButton: boolean;
  handleClick: (element: string, category: string) => void;
  isArtistPOVExists: string;
  handleOpenedVideo: () => void;
}

interface ICategory {
  [category: string]: {
    [question: string]: {
      messages: IMessage[];
      fullQuestion: string;
    };
  };
}

interface IQuestions {
  [question: string]: {
    messages: IMessage[];
    fullQuestion: string;
  };
}

export function ChatBody({
  queue,
  answer,
  changeView,
  questions,
  activeFinishButton,
  handleClick,
  isArtistPOVExists,
  handleOpenedVideo
}: IChatBody) {
  const [currentCategory, setCurrentCategory] = useState("");

  function lastQuestionChecker(questions: IQuestions) {
    if (Object.keys(questions).length == 1) {
      switchCategory("");
    }
  }

  function switchCategory(category: string) {
    setCurrentCategory(category);
  }
  return (
    <div className="w-full h-[82.6%] bg-white z-0 flex flex-col-reverse lg:px-[24px] md:px-[12px] px-[8px] overflow-y-auto no-scrollbar">
      <div className="flex flex-col justify-end">
        <div
          className={`rounded-tl-lg rounded-tr-lg rounded-br-lg md:pb-[14px] sm:pb-[8px] pb-[4px]`}
        >
          {queue.map((item) => (
            <div key={uuid()}>{item}</div>
          ))}
        </div>

        {answer && (
          <div className={"w-full flex flex-col items-end lg:py-4 py-1"}>
            {isArtistPOVExists && (
              <Button key={uuid()} onClick={changeView} variant="white">
                Посмотреть глазами артиста
              </Button>
            )}
            {isArtistPOVExists === "/panorama-images/vasiliev-panorama.webp" && (
              <Button key={uuid()} onClick={handleOpenedVideo} variant="white">
                Посмотреть на вашу работу
              </Button>
            )}

            {!currentCategory &&
              Object.keys(questions).map((t) => {
                if (Object.values(questions[t]).length == 1) {
                  if (t === "finish" && !activeFinishButton) {
                    return;
                  }
                  return (
                    <Button
                      key={uuid()}
                      onClick={() =>
                        handleClick(Object.keys(questions[t])[0], t)
                      }
                      variant="white"
                    >
                      {Object.keys(questions[t])}
                    </Button>
                  );
                } else if (Object.values(questions[t]).length > 1) {
                  return (
                    <Button
                      key={uuid()}
                      onClick={() => switchCategory(t)}
                      variant="white"
                    >
                      {t}
                    </Button>
                  );
                } else {
                  return;
                }
              })}

            {currentCategory &&
              Object.keys(questions[currentCategory]).map((t) => {
                lastQuestionChecker(questions[currentCategory]);
                console.log(t);

                return (
                  <Button
                    key={uuid()}
                    onClick={() => handleClick(t, currentCategory)}
                    variant="white"
                  >
                    {t}
                  </Button>
                );
              })}
            {currentCategory && (
              <Button
                key={uuid()}
                onClick={() => switchCategory("")}
                variant="white"
              >
                Назад
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
