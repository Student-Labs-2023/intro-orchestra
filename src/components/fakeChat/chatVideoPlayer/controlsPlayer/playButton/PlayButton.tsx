import Image from "next/image";
import { useEffect, useState } from "react";

type TPlayButton = {
  isPlaying: boolean;
  onTogglePlay: () => void;
  showButton: boolean;
};

const PlayButton = ({ isPlaying, onTogglePlay, showButton }: TPlayButton) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (isPlaying) {
      const hideTimeout = setTimeout(() => {
        setShow(true);
      }, 15000);

      return () => {
        clearTimeout(hideTimeout);
      };
    }
  }, [isPlaying]);
  return (
    <button
      style={{
        opacity: showButton ? 1 : 0,
        display: show ? "block" : "none",
      }}
      className="playButton"
      onClick={() => {
        onTogglePlay();
        setShow(false);
      }}
    >
      {!isPlaying ? (
        <Image
          className="md:w-[84px] md:h-[84px] lg:w-[104px] lg:h-[104px]"
          src={"/Play.svg"}
          alt={"Play"}
          width={64}
          height={64}
          priority
        ></Image>
      ) : (
        <Image
          className="md:w-[84px] md:h-[84px] lg:w-[104px] lg:h-[104px]"
          src={"/Stop.svg"}
          alt={"Stop"}
          width={64}
          height={64}
          priority
        ></Image>
      )}
    </button>
  );
};

export default PlayButton;
