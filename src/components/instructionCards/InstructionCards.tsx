"use client";

import { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import uuid from "react-uuid";

import { cardsData, buttonsData } from "./DataInstruction";
import styles from "./instructionCards.module.css";

const geometria = localFont({ src: "../../fonts/Geometria.woff" });
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
            <span style={geometriaMedium.style} className={"italic"}>
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
        <div className="absolute z-[2] top-0 left-0 mt-[15px] ml-[15px] lg:mt-[25px] lg:ml-[25px] xl:mt-[30px] xl:ml-[30px]">
          <Link href={"/"} className={styles.exit_btn}></Link>
        </div>
        <div className="absolute z-[2] top-0 right-0 mt-[15px] mr-[15px] lg:mt-[25px] lg:mr-[25px] xl:mt-[30px] xl:mr-[30px]">
          <button
            className={styles.instruction_btn}
            onClick={changeVisibleInstruction}
          ></button>
        </div>
      </header>

      <main>
        {!backToPanorama && (
          <div className="absolute w-full h-full bg-[#42424299]/[0.6] z-[3]">
            <div
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[368px] p-[16px] bg-white border-[2px] border-[#D93284] rounded-[16px] md:max-w-[503px] md:p-[24px] md:rounded-[22px] lg:max-w-[574px] lg:py-[24px] lg:px-[32px] lg:rounded-[16px] lg:border-[3px]
              2xl:max-w-[800px] 2xl:py-[32px] 2xl:px-[40px] 2xl:rounded-[24px]"
            >
              <div className="flex items-center justify-between mb-[8px] md:mb-[12px] lg:mb-[16px] 2xl:mb-[24px]">
                <div className="flex gap-[3px] py-[5px] md:py-[8px] 2xl:py-[10px] 2xl:gap-[5px]">
                  {buttonsData.map((btn) => (
                    <div
                      key={uuid()}
                      className={`${
                        btn === cardID
                          ? "w-[20px] md:w-[24px] 2xl:w-[32px] opacity-100"
                          : "w-[8px] md:w-[10px] 2xl:w-[14px] opacity-50"
                      } h-[8px] bg-[#D93284] rounded-[5px] md:h-[10px] md:rounded-[7px] 2xl:h-[14px] 2xl:rounded-[10px]`}
                    ></div>
                  ))}
                </div>
                <button
                  style={geometria.style}
                  className="text-[12px] leading-[10px] p-[5px] text-[#424242] md:text-[14px] md:p-[8px] lg:text-[18px] lg:leading-[16.2px]
                  2xl:text-[24px] 2xl:leading-[24px] 2xl:p-[10px] transition-all duration-200 ease-in hover:text-[#F060C0] active:text-[#792EC0]"
                  onClick={changeVisibleInstruction}
                >
                  Закрыть
                </button>
              </div>

              {cardsData.map((card) => {
                if (card.id === cardID) {
                  return (
                    <div
                      key={uuid()}
                      className="min-w-[336px] text-[#141414] mb-[16px] md:min-w-[455px] md:mb-[24px] lg:min-w-[510px] lg:mb-[32px] 2xl:min-w-[720px] 2xl:mb-[40px]"
                    >
                      <h3
                        style={geometriaBold.style}
                        className="text-[16px] leading-[20px] font-bold mb-[4px] md:text-[20px] md:leading-[25px] md:mb-[6px] lg:text-[22px] lg:leading-[27.5px]
                        2xl:text-[34px] 2xl:leading-[42.5px] 2xl:mb-[8px]"
                      >
                        {card.title}
                      </h3>
                      <div>
                        {card.desc.split("<br/>").map((text) => (
                          <p
                            key={uuid()}
                            style={geometria.style}
                            className="text-[14px] leading-[17.5px] font-normal md:text-[18px] md:leading-[22.5px] lg:text-[20px] lg:leading-[25px]
                            2xl:text-[30px] 2xl:leading-[37.5px]"
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
                className={`flex ${
                  !currentIndex ? "justify-end" : "justify-between"
                }  text-white items-center`}
              >
                {currentIndex && (
                  <button
                    style={geometria.style}
                    className="pt-[3px] pb-[7px] px-[16px] text-[16px] leading-[14px] border-[1px] rounded-[8px] border-[#D93284] font-medium text-[#141414]
                    md:text-[20px] md:leading-[0.9] md:px-[22px] md:border-[2px] md:rounded-[10px] lg:text-[22px] lg:leading-[1] lg:rounded-[12px]
                    2xl:text-[30px] 2xl:leading-[0.9] 2xl:rounded-[16px] 2xl:pt-[8px] 2xl:pb-[13px] 2xl:px-[30px] transition-all duration-200 ease-in
                    hover:bg-[#D932841A]/[0.1] active:bg-[#F060C04D]/[0.3] active:text-[#D93284]"
                    onClick={goToBackCard}
                  >
                    назад
                  </button>
                )}

                <button
                  style={geometriaMedium.style}
                  className="pt-[4px] pb-[8px] px-[16px] text-[16px] leading-[14px] rounded-[8px] border-none bg-[#D93284] font-medium
                  md:text-[20px] md:leading-[0.9] md:px-[22px] md:pt-[5px] md:pb-[9px] md:rounded-[10px] lg:text-[22px] lg:leading-[1] lg:rounded-[12px]
                  2xl:text-[30px] 2xl:leading-[0.9] 2xl:rounded-[16px] 2xl:pt-[10px] 2xl:pb-[15px] 2xl:px-[30px] transition-all duration-200 ease-in
                  hover:bg-[#F060C0] active:bg-[#792EC0]"
                  onClick={
                    !finishInstruction ? goToNextCard : changeVisibleInstruction
                  }
                >
                  {!finishInstruction ? "далее" : "начать"}
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
