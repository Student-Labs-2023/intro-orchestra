"use client";

import { useState } from "react";
import uuid from "react-uuid";
import Link from "next/link";
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

  return (
    <div className="max-w-[800px] px-[40px] py-[24px] bg-[#FFFFFF] rounded-3xl  border-[3px] border-[#D93284]">
      <div className="flex justify-between items-center mb-[24px]">
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
        <Link href={'/panorama'}>
          <button style={geometria.style} className="text-[24px] text-[#424242]">
            Закрыть
          </button>
        </Link>
      </div>
      {cardsData.map((card) => {
        if (card.id === cardID) {
          return (
            <div key={uuid()} className="mb-[40px]">
              <h3
                style={geometriaBold.style}
                className="text-[34px] text-[#141414] mb-[8px]"
              >
                {card.title}
              </h3>
              <p style={geometria.style} className="text-[30px] text-[#141414]">
                {card.desc}
              </p>
            </div>
          );
        }
      })}
      <div
        className={`flex ${
          currentIndex != 0 ? "justify-between" : "justify-end "
        } items-center text-[30px] text-[#ffff]`}
      >
        {currentIndex != 0 ? (
          <button
            style={geometria.style}
            className="w-[150px] h-[50px] border-[2px] border-[#D93284] rounded-2xl text-[#141414] hover:bg-[#D93284]/[0.1] active:text-[#D93284] active:bg-[#F060C0]/[0.3]"
            onClick={goToBackCard}
          >
            назад
          </button>
        ) : null}

        {finishInstruction ? (
          <Link href={"/panorama"}>
            <button
              style={geometriaMedium.style}
              className="w-[150px] h-[50px] bg-[#D93284] rounded-2xl hover:bg-[#F060C0] active:bg-[#792EC0]"
            >
              начать
            </button>
          </Link>
        ) : (
          <button
            style={geometriaMedium.style}
            className="w-[150px] h-[50px] bg-[#D93284] rounded-2xl transition-all duration-400 ease-in hover:bg-[#F060C0] active:bg-[#792EC0]"
            onClick={goToNextCard}
          >
            далее
          </button>
        )}
      </div>
    </div>
  );
};

export default InstructionCards;
