import styled from "@emotion/styled";
import "rc-slider/assets/index.css";
import React, { useEffect, useRef, useState } from "react";

import localFont from "next/font/local";
import { BsFillVolumeUpFill, BsPauseFill, BsPlayFill } from "react-icons/bs";
import ElapsedTimeTracker from "./ElapsedTimeTracker";
import "./loader.css";

const Video = styled.video`
  flex-shrink: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  border-color: #dd1181;
  border-width: 3px;
`;

const geometriaMedium = localFont({
  src: "../../../fonts/Geometria-Medium.woff",
});

interface Props {
  src: string;
  muted?: boolean;
  autoPlay?: boolean;
}

const Player = (props: Props) => {
  const { src, autoPlay, muted } = props;
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [durationSec, setDurationSec] = useState(1);
  const [elapsedSec, setElapsedSec] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showVideoControls, setShowVideoControls] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);
  const currentVolumeRef = useRef<HTMLDivElement>(null);

  class dynamicTimer {
    timer: NodeJS.Timeout | undefined;
    counter: number;

    constructor() {
      this.timer = undefined;
      this.counter = 0;
    }

    startTimer() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        setShowVideoControls(false);
        setShowVolumeSlider(false);
      }, 4000);
    }
  }

  let timer = useRef(new dynamicTimer());

  const clickOnVideoHandler = () => {
    timer.current.startTimer();

    if (showVideoControls) {
      if (isWaiting) setIsWaiting(false);
      setIsPlaying(true);
      handlePlayPauseClick();
    }
    setShowVideoControls(true);
  };

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const onWaiting = () => {
      if (isPlaying) setIsPlaying(false);
      setIsWaiting(true);
    };

    const onPlay = () => {
      if (isWaiting) setIsWaiting(false);
      setIsPlaying(true);
    };

    const onPause = () => {
      setIsPlaying(false);
      setIsWaiting(false);
    };

    const element = videoRef.current;

    const onProgress = () => {
      if (!element.buffered || !bufferRef.current) return;
      if (!element.buffered.length) return;
      const bufferedEnd = element.buffered.end(element.buffered.length - 1);
      const duration = element.duration;
      if (bufferRef && duration > 0) {
        bufferRef.current.style.width = (bufferedEnd / duration) * 100 + "%";
      }
    };

    const onTimeUpdate = () => {
      setIsWaiting(false);
      if (!element.buffered || !progressRef.current) return;
      const duration = element.duration;
      setDurationSec(duration);
      setElapsedSec(element.currentTime);
      if (progressRef && duration > 0) {
        progressRef.current.style.width =
          (element.currentTime / duration) * 100 + "%";
      }
    };

    element.addEventListener("progress", onProgress);
    element.addEventListener("timeupdate", onTimeUpdate);

    element.addEventListener("waiting", onWaiting);
    element.addEventListener("play", onPlay);
    element.addEventListener("playing", onPlay);
    element.addEventListener("pause", onPause);

    // clean up
    return () => {
      element.removeEventListener("waiting", onWaiting);
      element.removeEventListener("play", onPlay);
      element.removeEventListener("playing", onPlay);
      element.removeEventListener("pause", onPause);
      element.removeEventListener("progress", onProgress);
      element.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [videoRef.current]);

  // This is where the playback rate is set on the video element.

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const seekToVolume = (pos: number | number[]) => {
    timer.current.startTimer();
    if (!videoRef.current) return;
    if (typeof pos == "object") {
      pos = pos[0];
    }
    if (currentVolumeRef.current) {
      currentVolumeRef.current.style.width = pos * 100 + "%";
    }
    if (pos > 1) {
      videoRef.current.volume = 1;
    } else if (pos < 0) {
      videoRef.current.volume = 0;
    } else {
      videoRef.current.volume = pos;
    }
  };

  const seekToPosition = (pos: number) => {
    timer.current.startTimer();
    if (!videoRef.current) return;
    if (pos < 0 || pos > 1) return;

    const durationMs = videoRef.current.duration * 1000 || 0;

    const newElapsedMs = durationMs * pos;
    const newTimeSec = newElapsedMs / 1000;
    videoRef.current.currentTime = newTimeSec;
  };

  return (
    <div className="absolute w-screen h-screen flex items-center justify-center">
      <div
        className={`flex flex-col cursor-pointer items-center justify-center relative rounded-[1.5vw] w-[70%] h-auto overflow-hidden group/item`}
      >
        {isWaiting && (
          <div className="loader-container w-full h-full">
            <div className="spinner "></div>
            <span
              className="loading text-[20px] mt-2 text-[#dd1181]"
              style={geometriaMedium.style}
            >
              Загрузка...
            </span>
          </div>
        )}
        <Video
          autoPlay={autoPlay}
          muted={muted}
          src={src}
          className="z-[2]"
          onClick={() => clickOnVideoHandler()}
          ref={videoRef}
          onMouseOver={() => {
            setShowVideoControls(true);
          }}
          onMouseLeave={() => {
            setShowVideoControls(false);
          }}
        />
        <div
          className={`group-hover/item:opacity-100 ${
            showVideoControls ? "opacity-100" : ""
          } flex timeline-container opacity-0 w-full absolute transition-opacity delay-75 left-0 bottom-0 flex-end px-[2vw] h-[11vh] sm:h-[10vh] z-[4]`}
        >
          <div className="flex flex-col w-full items-center">
            <div
              className="flex timeline w-full delay-100 h-[1.2vh] max-h-[1.2vh] min-h-[1.2vh] mb-[1vh] rounded-[10px] bg-[#c1c1c180] hover:h-[1.4vh] overflow-hidden"
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                const { left, width } = e.currentTarget.getBoundingClientRect();
                const clickedPos = (e.clientX - left) / width;
                seekToPosition(clickedPos);
              }}
            >
              <div className="relative w-full h-full flex">
                <div
                  className="play-progress h-full bg-[#dd1181] z-[10] flex"
                  ref={progressRef}
                ></div>
                <div
                  className="buffer-progress flex absolute h-full bg-[#FDFFFC80]"
                  ref={bufferRef}
                ></div>
              </div>
            </div>
            <div className="flex w-full justify-between items-center ml-[1vw]">
              <div className="flex items-center">
                <button
                  className="p-0 mr-[1vw] rounded bg-transparent hover:opacity-40 "
                  onClick={() => {
                    handlePlayPauseClick();
                    timer.current.startTimer();
                  }}
                >
                  {!isPlaying ? (
                    <BsPlayFill color="white" className="w-[3vw] h-auto" />
                  ) : (
                    <BsPauseFill color="white" className="w-[3vw] h-auto" />
                  )}
                </button>

                <div className="group/volumeIcon flex flex-row w-full h-full items-center justify-center">
                  <BsFillVolumeUpFill
                    color="white"
                    className="w-[2vw] h-auto p-0 flex"
                    onClick={() => {
                      setShowVolumeSlider((prev) => !prev);
                      timer.current.startTimer();
                    }}
                  ></BsFillVolumeUpFill>

                  <div
                    className={`volumeLine ml-[0.5vw] delay-100 h-[1vh] rounded-[10px] overflow-hidden w-[4.5vw] group-hover/volumeIcon:block ${
                      showVolumeSlider ? "block" : "hidden"
                    }`}
                    onClick={(
                      e: React.MouseEvent<HTMLDivElement, MouseEvent>
                    ) => {
                      const { left, width } =
                        e.currentTarget.getBoundingClientRect();
                      const clickedPos = (e.clientX - left) / width;
                      seekToVolume(clickedPos);
                    }}
                  >
                    <div className="relative w-full h-full flex">
                      <div
                        className="h-full w-full bg-[#dd1181] flex z-[10]"
                        ref={currentVolumeRef}
                      ></div>
                      <div className="flex absolute w-full h-full bg-[#FDFFFC80]"></div>
                    </div>
                  </div>
                </div>

                <ElapsedTimeTracker totalSec={24} elapsedSec={elapsedSec} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
