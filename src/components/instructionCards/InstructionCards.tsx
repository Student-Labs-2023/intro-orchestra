"use client";

import { useState } from "react";
import uuid from "react-uuid";
import Image from "next/image";
import localFont from "next/font/local";

import { cardsData, buttonsData } from "./DataInstruction";

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
      {!backToPanorama && (
        <div
          className={`
          } absolute z-[3] w-screen h-screen flex justify-center items-center bg-[#42424299]/[0.6]`}
        >
          <div className="max-w-[420px] px-[20px] py-[12px] bg-[#FFFFFF] rounded-3xl  border-[3px] border-[#D93284] sm:max-w-[520px] lg:max-w-[800px] lg:px-[40px] md:py-[24px]">
            <div className="flex justify-between items-center mb-[12px]">
              <div className="flex items-center gap-[5px]">
                {buttonsData.map((button) => (
                  <div
                    key={uuid()}
                    className={`${
                      button === cardID
                        ? "w-[32px] opacity-[1]"
                        : "w-[13px] opacity-[0.65]"
                    } h-[13px] rounded-full  bg-[#D93284]`}
                  ></div>
                ))}
              </div>
              <button
                style={geometria.style}
                className="text-[20px] text-[#424242] sm:text-[30px]"
                onClick={changeVisibleInstruction}
              >
                Закрыть
              </button>
            </div>
            {cardsData.map((card) => {
              if (card.id === cardID) {
                return (
                  <div key={uuid()} className="mb-[35px] sm:mb-[40px]">
                    <h3
                      style={geometriaBold.style}
                      className="text-[20px] text-[#141414] mb-[8px] sm:text-[30px] lg:text-[34px]"
                    >
                      {card.title}
                    </h3>
                    <p
                      style={geometria.style}
                      className="text-[15px] text-[#141414] sm:text-[20px] lg:text-[30px]"
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
              } items-center text-[20px] text-[#ffff] sm:text-[30px]`}
            >
              {currentIndex != 0 ? (
                <button
                  style={geometria.style}
                  className="w-[100px] h-[50px] border-[2px] border-[#D93284] rounded-2xl text-[#141414] hover:bg-[#D93284]/[0.1] active:text-[#D93284] active:bg-[#F060C0]/[0.3] sm:w-[150px]"
                  onClick={goToBackCard}
                >
                  назад
                </button>
              ) : null}

              {finishInstruction ? (
                <button
                  style={geometriaMedium.style}
                  className="w-[100px] h-[50px] bg-[#D93284] rounded-2xl hover:bg-[#F060C0] active:bg-[#792EC0] sm:w-[150px]"
                  onClick={changeVisibleInstruction}
                >
                  начать
                </button>
              ) : (
                <button
                  style={geometriaMedium.style}
                  className="w-[100px] h-[50px] bg-[#D93284] rounded-2xl transition-all duration-400 ease-in hover:bg-[#F060C0] active:bg-[#792EC0] sm:w-[150px]"
                  onClick={goToNextCard}
                >
                  далее
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="absolute z-[2] top-0 right-0 mt-[30px] mr-[30px]">
        <button onClick={changeVisibleInstruction}>
          <Image
            className="sm:w-[60px] sm:h-[60px] md:w-[90px] md:h-[90px]"
            width={45}
            height={45}
            src={"/instruction.svg"}
            alt={"Инструкция пользователя"}
          />
        </button>
      </div>
    </>
  );
};

export default InstructionCards;
