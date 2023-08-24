import { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./chatVideoPlayer.module.css";
import ControlsPlayer from "./controlsPlayer/ControlsPlayer";

const ChatVideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showButton, setShowButton] = useState(true);

  const handleVideoHover = (hovered: boolean) => {
    if (isPlaying) {
      setShowButton(hovered);
    }
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (progress: any) => {
    setPlayedSeconds(progress.playedSeconds);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  return (
    <div className={styles.container}>
      <div
        onMouseEnter={() => handleVideoHover(true)}
        onMouseLeave={() => handleVideoHover(false)}
        className={`${styles.videoContainer} relative max-w-[375px] w-full sm:max-w-[480px] md:max-w-[680px] lg:max-w-[980px] xl:max-w-[1180px] 2xl:max-w-[1334px]`}
      >
        <ReactPlayer
          className={styles.videoPlayer}
          url={videoUrl}
          playing={isPlaying}
          onProgress={handleProgress}
          onDuration={handleDuration}
          playedseconds={playedSeconds}
          width=""
          height=""
        />
        <ControlsPlayer
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          playedSeconds={playedSeconds}
          duration={duration}
          showButton={showButton}
        />
      </div>
    </div>
  );
};

export default ChatVideoPlayer;
