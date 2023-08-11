import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BsPauseCircle, BsPlayCircle } from "react-icons/bs";
import { default as WaveSurfer, WaveSurferOptions } from "wavesurfer.js";

// попробовать memo

function useWaveSurfer(
  containerRef: React.RefObject<HTMLDivElement>,
  options: WaveSurferOptions
) {
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer>();

  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    });

    setWaveSurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [containerRef]);

  return waveSurfer;
}

interface IWaveSurferPlayer {
  audioUrl: string;
}

const WaveSurferPlayer = memo(function WaveSurferPlayer({
  audioUrl,
}: IWaveSurferPlayer) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const waveSurfer = useWaveSurfer(containerRef, {
    container: "body",
    height: 20,
    normalize: false,
    waveColor: "#ADB8FF",
    progressColor: "#d14e98",
    cursorColor: "#dd5e98",
    cursorWidth: 0,
    barWidth: 3,
    barGap: 0,
    barRadius: 10,
    barHeight: 3,
    minPxPerSec: 0.01,
    fillParent: true,
    mediaControls: false,
    url: audioUrl,
    peaks: [
      [
        0, 0.112, 0.008, 0.036, 0.068, 0.072, 0.126, 0.086, 0.231, 0.136, 0.1,
        0.001, 0.04, 0.118, 0.124, 0.025, 0.076, 0.583, 0.112, 0.122, 0.176,
        0.057, 0.125, 0.261, 0.048, 0.104, 0.171, 0.139, 0.291, 0.231, 0.132,
        0.057, 0.188, 0.106, 0.233, 0.111, 0.1, 0.393, 0.053, 0.157, 0.198,
        0.043, 0.017, 0.114, 0.276, 0.008, 0.081, 0.041, 0.099, 0.163, 0.314,
        0.019, 0.02, 0.085, 0.302, 0.26, 0.273, 0.529, 0.269, 0.032, 0.351,
        0.028, 0.008, 0, 0.106, 0.233, 0.111, 0.1, 0.393, 0.053, 0.157, 0.198,
        0.043, 0.017, 0.114, 0.276, 0.008, 0.081, 0.041, 0.099, 0.163, 0.314,
        0.019, 0.02, 0.085, 0.302, 0.26, 0.273, 0.529, 0.269, 0.032, 0.351,
        0.028, 0.008,
      ],
    ],
    autoplay: false,
    interact: true,
    hideScrollbar: true,
    audioRate: 1,
    autoScroll: true,
    autoCenter: true,
    sampleRate: 24000,
  });

  const onPlayClick = useCallback(() => {
    waveSurfer?.isPlaying() ? waveSurfer.pause() : waveSurfer?.play();
  }, [waveSurfer]);

  useEffect(() => {
    if (!waveSurfer) return;

    setCurrentTime(0);
    setIsPlaying(false);

    const subscriptions = [
      waveSurfer.on("play", () => setIsPlaying(true)),
      waveSurfer.on("pause", () => setIsPlaying(false)),
      waveSurfer.on("timeupdate", (currentTime) =>
        setCurrentTime(Math.trunc(currentTime))
      ),
    ];

    return () => {
      subscriptions.forEach((unSub) => unSub());
    };
  }, [waveSurfer]);

  //TODO Ебучее гс надо фиксить

  return (
    <div className="bg-[#E6E9FF] max-w-[60%] md:p-2 md:pl-3 md:pr-3 pl-2 pr-2 p-1 rounded-tl-xl rounded-tr-xl rounded-br-xl md:mt-3 mt-1 w-auto flex flex-row items-center justify-start gap-2">
      {isPlaying ? (
        <BsPauseCircle
          className="md:h-[40px] h-[20px] w-auto cursor-pointer"
          color="#ADB8FF"
          onClick={onPlayClick}
        ></BsPauseCircle>
      ) : (
        <BsPlayCircle
          className="md:h-[40px] h-[20px] w-auto cursor-pointer"
          color="#ADB8FF"
          onClick={onPlayClick}
        ></BsPlayCircle>
      )}
      <div className="flex flex-col items-start justify-between md:h-[40px] h-[20px] flex-grow pr-3 w-[70%]">
        <div ref={containerRef} className="w-[100%]" />
        <span className="text-[#5965B3] md:text-[16px] text-[8px]">
          {Math.trunc(currentTime / 60)}:
          {Math.trunc((currentTime - Math.trunc(currentTime / 60) * 60) / 10)}
          {(currentTime - Math.trunc(currentTime / 60) * 60) % 10}
        </span>
      </div>
    </div>
  );
});

interface AudioMsgProps {
  audioUrl: string;
}

export const AudioMsg = memo(function AudioMsg({ audioUrl }: AudioMsgProps) {
  const loger = useMemo(() => {
    console.log("audio rendered", audioUrl);
  }, [audioUrl]);

  return <WaveSurferPlayer audioUrl={"/" + audioUrl} />;
});
