import "./TypingBallsMsg.styles.css";

export const TypingBallsMsg = () => {
  return (
    <div className="bg-[#E6E9FF] max-w-[60%] md:p-2 md:pl-3 md:pr-3 pl-2 pr-2 p-[3vh] rounded-tl-xl rounded-tr-xl rounded-br-xl lg:mt-4 md:mt-3 sm:mt-2 mt-1 w-auto inline-block lg:text-[20px] md:text-[16px] sm:text-[12px] text-[8px]">
      <span className="fst-ball"></span>
      <span className="sec-ball"></span>
      <span className="th-ball"></span>
    </div>
  );
};
