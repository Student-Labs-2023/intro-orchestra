import React, { useCallback, useEffect, useRef, useState } from "react";
import { default as WaveSurfer, WaveSurferOptions } from "waveSurfer.js";

const useWaveSurfer = (
  containerRef: React.RefObject<HTMLDivElement>,
  options: WaveSurferOptions
) => {
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer>();

  useEffect(() => {
    if (!containerRef.current) return;
    console.log(options);

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
};

const WaveSurferPlayer = (props: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const waveSurfer = useWaveSurfer(containerRef, {
    container: "body",
    height: 70,
    normalize: false,
    waveColor: "#ff4e00",
    progressColor: "#dd5e98",
    cursorColor: "#000",
    cursorWidth: 0,
    barWidth: 2,
    barGap: 0,
    barRadius: 10,
    barHeight: 2,
    minPxPerSec: 0,
    fillParent: true,
    mediaControls: false,
    peaks: [
      [
        0, 0.0023595101665705442, 0.012107174843549728, 0.005919494666159153,
        -0.31324470043182373, 0.1511787623167038, 0.2473851442337036,
        0.11443428695201874, -0.036057762801647186, -0.0968964695930481,
        -0.03033737652003765, 0.10682467371225357, 0.23974689841270447,
        0.013210971839725971, -0.12377244979143143, 0.046145666390657425,
        -0.015757400542497635, 0.10884027928113937, 0.06681904196739197,
        0.09432944655418396, -0.17105795443058014, -0.023439358919858932,
        -0.10380347073078156, 0.0034454423002898693, 0.08061369508504868,
        0.026129156351089478, 0.18730352818965912, 0.020447958260774612,
        -0.15030759572982788, 0.05689578503370285, -0.0009095853311009705,
        0.2749626338481903, 0.2565386891365051, 0.07571295648813248,
        0.10791446268558502, -0.06575305759906769, 0.15336275100708008,
        0.07056761533021927, 0.03287476301193237, -0.09044631570577621,
        0.01777501218020916, -0.04906218498945236, -0.04756792634725571,
        -0.006875281687825918, 0.04520256072282791, -0.02362387254834175,
        -0.0668797641992569, 0.12266506254673004, -0.10895221680402756,
        0.03791835159063339, -0.0195105392485857, -0.031097881495952606,
        0.04252675920724869, -0.09187793731689453, 0.0829525887966156,
        -0.003812957089394331, 0.0431736595928669, 0.07634212076663971,
        -0.05335947126150131, 0.0345163568854332, -0.049201950430870056,
        0.02300390601158142, 0.007677287794649601, 0.015354577451944351,
        0.007677287794649601, 0.007677288725972176,
      ],
    ],
    autoplay: false,
    url: "SOAPMan.mp3",
    interact: true,
    hideScrollbar: false,
    audioRate: 1,
    autoScroll: true,
    autoCenter: true,
    sampleRate: 8000,
  });

  // On play button click
  const onPlayClick = useCallback(() => {
    waveSurfer?.isPlaying() ? waveSurfer.pause() : waveSurfer?.play();
  }, [waveSurfer]);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!waveSurfer) return;

    setIsPlaying(false);

    const subscriptions = [
      waveSurfer.on("play", () => setIsPlaying(true)),
      waveSurfer.on("pause", () => setIsPlaying(false)),
    ];

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [waveSurfer]);

  return (
    <div className="bg-[#E6E9FF] max-w-[60%] p-2 pl-3 rounded-tl-xl rounded-tr-xl rounded-br-xl mt-3 w-auto flex flex-row items-center justify-center ">
      <button onClick={onPlayClick}>Play</button>
      <div ref={containerRef} className="w-[80%] mr-3 ml-3" />
    </div>
  );
};

interface Props {
  audioUrl: string;
}

export const AudioMsg: React.FC = () => {
  return (
    <>
      <WaveSurferPlayer
        height={60}
        waveColor="rgb(200, 0, 200)"
        progressColor="rgb(100, 0, 100)"
      />
    </>
  );
};
