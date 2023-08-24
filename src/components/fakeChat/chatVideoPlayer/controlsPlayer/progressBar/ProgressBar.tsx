import styles from "./progressBar.module.css";
import localFont from "next/font/local";

type TProgressBar = {
  playedSeconds: number;
  duration: number;
};

const geometria = localFont({ src: "../../../../../fonts/Geometria.woff" });

const formatTime = (timeInSeconds: number) => {
  const seconds = Math.floor(timeInSeconds);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const ProgressBar = ({ playedSeconds, duration }: TProgressBar) => {
  const currentTime = formatTime(playedSeconds);
  const remainingTime = formatTime(duration);

  return (
    <div className={styles.container}>
      <div style={geometria.style} className={styles.text}>
        <span>{currentTime}</span> / <span>{remainingTime}</span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${(playedSeconds / duration) * 100}%` }}
        ></div>
        <div
          className={styles.seekBar}
          style={{ left: `${(playedSeconds / duration) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
