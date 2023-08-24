import { useState } from "react";
import PlayButton from "./playButton/PlayButton";
import ProgressBar from "./progressBar/ProgressBar";

type TControlsPlayer = {
  isPlaying: boolean;
  onTogglePlay: () => void;
  playedSeconds: number;
  duration: number;
  showButton: boolean;
};

const ControlsPlayer = ({
  isPlaying,
  onTogglePlay,
  playedSeconds,
  duration,
  showButton,
}: TControlsPlayer) => {
  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <PlayButton
          isPlaying={isPlaying}
          onTogglePlay={onTogglePlay}
          showButton={showButton}
        />
      </div>
      <ProgressBar playedSeconds={playedSeconds} duration={duration} />
    </>
  );
};

export default ControlsPlayer;
