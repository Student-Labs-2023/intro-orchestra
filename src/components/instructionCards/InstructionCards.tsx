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
          <div
            className={`absolute z-[3] w-screen h-screen bg-[#42424299]/[0.6]`}
          >
            <div
              className={`${styles.instruction_cards} max-w-[368px] p-[16px] md:py-[25px] md:px-[30px] lg:py-[30px] lg:px-[40px] bg-[#FFFFFF] rounded-2xl  border-[1px] border-[#D93284] md:max-w-[550px] lg:max-w-[800px]`}
            >
              <div className="flex justify-between items-center mb-[4px] sm:mb-[8px] py-[5.5px] lg:mb-[24px]">
                <div className="flex items-center gap-[5px]">
                  {buttonsData.map((button) => (
                    <div
                      key={uuid()}
                      className={`${
                        button === cardID
                          ? "w-[20px] opacity-[1] md:w-[32px]"
                          : "w-[8px] opacity-[0.65] md:w-[13px]"
                      } h-[8px] md:h-[13px] rounded-full  bg-[#D93284]`}
                    ></div>
                  ))}
                </div>
                <button
                  style={geometria.style}
                  className="text-[#424242] text-[12px] sm:leading-[15px] md:text-[18px] lg:text-[24px]"
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
                      className="mb-[16px] md:mb-[26px] lg:mb-[40px]"
                    >
                      <h3
                        style={geometriaBold.style}
                        className="text-[#141414] mb-[4px] text-[16px] sm:leading-[20px] md:text-[24px] md:mb-[8px] lg:text-[34px] lg:mb-[20px]"
                      >
                        {card.title}
                      </h3>
                      <p
                        style={geometria.style}
                        className="text-[#141414] text-[14px] sm:leading-[18px] md:text-[20px] md:leading-[27px] lg:text-[30px] lg:leading-[37px]"
                      >
                        {card.desc}
                      </p>
                    </div>
                  );
                }
              })}

              <div
                className={`flex ${
                  currentIndex != 0 ? "justify-between" : "justify-end "
                } items-center text-[#ffff] text-[16px] md:text-[20px] lg:text-[30px]`}
              >
                {currentIndex != 0 ? (
                  <button
                    style={geometria.style}
                    className="border-[1px] border-[#D93284] px-[6px] py-[4] rounded-xl  sm:px-[16px] sm:leading-[14px] sm:py-[6px] md:px-[30px] md:py-[12px] lg:leading-[30px]  text-[#141414] hover:bg-[#D93284]/[0.1] active:text-[#D93284] active:bg-[#F060C0]/[0.3]"
                    onClick={goToBackCard}
                  >
                    назад
                  </button>
                ) : null}

                {finishInstruction ? (
                  <button
                    style={geometriaMedium.style}
                    className="bg-[#D93284] px-[6px] py-[4] rounded-xl  sm:px-[16px] sm:leading-[14px] sm:py-[6px] md:px-[30px] md:py-[12px] lg:leading-[30px] transition-all duration-400 ease-in hover:bg-[#F060C0] active:bg-[#792EC0]"
                    onClick={changeVisibleInstruction}
                  >
                    начать
                  </button>
                ) : (
                  <button
                    style={geometriaMedium.style}
                    className="bg-[#D93284] px-[6px] py-[4] rounded-xl sm:px-[16px] sm:leading-[14px] sm:py-[6px] md:px-[30px] md:py-[12px] lg:leading-[30px] transition-all duration-400 ease-in hover:bg-[#F060C0] active:bg-[#792EC0] "
                    onClick={goToNextCard}
                  >
                    далее
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default InstructionCards;
