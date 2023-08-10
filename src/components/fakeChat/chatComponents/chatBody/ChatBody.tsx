import { ReactElement } from "react";
import uuid from "react-uuid";
import { Button } from "../../msgComponents";

interface IChatBody {
  queue: ReactElement[];
  answer: boolean;
  changeView: (t: string | undefined) => void;
  questions: string[];
  activeFinishButton: boolean;
  handleClick: (element: string) => void;
}

export function ChatBody({
  queue,
  answer,
  changeView,
  questions,
  activeFinishButton,
  handleClick,
}: IChatBody) {
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
  );
}
