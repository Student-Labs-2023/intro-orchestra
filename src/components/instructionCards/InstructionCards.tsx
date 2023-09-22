"use client";

import localFont from "next/font/local";
import Link from "next/link";
import { useState } from "react";
import uuid from "react-uuid";

import { buttonsData, cardsData } from "./DataInstruction";
import styles from "./instructionCards.module.css";

const geometria = localFont({ src: "../../fonts/Geometria.woff" });
const geometriaBold = localFont({ src: "../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({
  src: "../../fonts/Geometria-Medium.woff",
});

interface IInstructionCards {
  turnOnInstruction: string | null;
}

const InstructionCards = ({ turnOnInstruction }: IInstructionCards) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardID, setCardID] = useState(cardsData[currentIndex].id);
  const [backToPanorama, setBackToPanorama] = useState(
    !Boolean(turnOnInstruction)
  );

  const goToNextCard = () => {
    const nextIndex = (currentIndex + 1) % cardsData.length;
    setCardID(cardsData[nextIndex].id);
    setCurrentIndex(nextIndex);
  };

  const goToBackCard = () => {
    const nextIndex = (currentIndex - 1) % cardsData.length;
    setCardID(cardsData[nextIndex].id);
    setCurrentIndex(nextIndex);
  };

  const changeVisibleInstruction = () => {
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
        <div className="absolute z-[2] top-0 left-0">
          <Link href={"/"} className={styles.exit_btn}></Link>
        </div>
        <div className="absolute z-[2] top-0 right-0">
          <button
            className={styles.instruction_btn}
            onClick={changeVisibleInstruction}
          ></button>
        </div>
      </header>
    </>
  );
};

export default InstructionCards;
