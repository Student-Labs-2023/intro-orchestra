"use client";

import { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import uuid from "react-uuid";

import { cardsData, buttonsData } from "./DataInstruction";
import styles from "./instructionCards.module.css";

const geometria = localFont({ src: "../../fonts/Geometria.ttf" });
const geometriaBold = localFont({ src: "../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({
  src: "../../fonts/Geometria-Medium.woff",
});
const geometriaItalic = localFont({ src: "../../fonts/Geometria-Italic.woff" });

const InstructionCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardID, setCardID] = useState(cardsData[currentIndex].id);
  const [finishInstruction, setFinishInstruction] = useState(false);
  const [backToPanorama, setBackToPanorama] = useState(false);

  const goToNextCard = () => {
    const nextIndex = (currentIndex + 1) % cardsData.length;
    nextIndex === 3 ? setFinishInstruction((prev) => !prev) : null;
    setCardID(cardsData[nextIndex].id);
    setCurrentIndex(nextIndex);
  };

  const goToBackCard = () => {
    const nextIndex = (currentIndex - 1) % cardsData.length;
    nextIndex === 2 ? setFinishInstruction((prev) => !prev) : null;
    setCardID(cardsData[nextIndex].id);
    setCurrentIndex(nextIndex);
  };

  const changeVisibleInstruction = () => {
    setFinishInstruction(false);
    setCurrentIndex(0);
    setCardID(cardsData[currentIndex].id);
    setBackToPanorama((prev) => (prev = !prev));
  };

  const findAndWrapSpan = (text: string) => {
    const spanIndex = text.indexOf("<span>");
    if (spanIndex !== -1) {
      const startIndex = spanIndex + "<span>".length;
      const endIndex = text.indexOf("</span>", startIndex);
      if (endIndex !== -1) {
        const beforeSpan = text.slice(0, spanIndex);
        const spanText = text.slice(startIndex, endIndex);
        const afterSpan = text.slice(endIndex + "</span>".length);
        return (
          <>
            {beforeSpan}
            <span
              style={geometriaMedium.style}
              className={"italic"}
            >
              {spanText}
            </span>
            {afterSpan}
          </>
        );
      }
    }
    return <>{text}</>;
  };

  return (
    <>
      <header>
        <div className="absolute z-[2] top-0 left-0 mt-[30px] ml-[30px]">
          <Link href={"/"} className={styles.exit_btn}></Link>
        </div>
        <div className="absolute z-[2] top-0 right-0 mt-[30px] mr-[30px]">
          <button
            className={styles.instruction_btn}
            onClick={changeVisibleInstruction}
          ></button>
        </div>
      </header>

      <main>
        {!backToPanorama && (
          <div className="absolute w-full h-full bg-[#42424299]/[0.6] z-[3]">
            <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] max-w-[800px] p-[16px] rounded-[24px] bg-white border-[1px] border-[#D93284]">
              <div className="flex justify-between items-center mb-[8px]">
                <div className="py-[7px]">
                  <div className="flex gap-[3px]">
                    {buttonsData.map((button) => (
                      <div
                        key={uuid()}
                        className={`${
                          button === cardID
                            ? "w-[14px]  opacity-[1]"
                            : "w-[6px] opacity-[0.5]"
                        } h-[6px] rounded-full  bg-[#D93284]`}
                      ></div>
                    ))}
                  </div>
                </div>
                <button
                  style={geometria.style}
                  className="text-[12px] font-normal leading-[15px] p-[6px]"
                  onClick={changeVisibleInstruction}
                >
                  Закрыть
                </button>
              </div>

              {cardsData.map((card) => {
                if (card.id === cardID) {
                  return (
                    <div key={uuid()} className="mb-[16px]">
                      <h3
                        style={geometriaBold.style}
                        className="mb-[3px] text-[16px] leading-[20px] whitespace-nowrap"
                      >
                        {card.title}
                      </h3>
                      <div>
                        {card.desc.split("<br/>").map((text) => (
                          <p
                            key={uuid()}
                            style={geometria.style}
                            className="text-[15px] leading-[19px] whitespace-nowrap"
                          >
                            {findAndWrapSpan(text)}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                }
              })}

              <div
                className={`flex items-center ${
                  currentIndex != 0 ? "justify-between" : "justify-end"
                }`}
              >
                {currentIndex != 0 && (
                  <button
                    style={geometria.style}
                    className={
                      "text-[14px] text-[#141414] font-normal leading-[13px] lowercase px-[15px] py-[5px] border-[1px] border-[#D93284] rounded-[7px] bg-[#fff] hover:bg-[#D932841A]/[0.1] active:bg-[#F060C04D]/[0.3] transition-all ease-in duration-200"
                    }
                    onClick={goToBackCard}
                  >
                    назад
                  </button>
                )}
                <button
                  style={geometriaMedium.style}
                  className="text-[14px] text-white font-medium leading-[13px] lowercase px-[16px] py-[6px] border-none rounded-[7px] bg-[#d93284] hover:bg-[#F060C0] active:bg-[#792EC0] transition-all ease-in duration-200"
                  onClick={
                    finishInstruction ? changeVisibleInstruction : goToNextCard
                  }
                >
                  {finishInstruction ? "начать" : "далее"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default InstructionCards;
