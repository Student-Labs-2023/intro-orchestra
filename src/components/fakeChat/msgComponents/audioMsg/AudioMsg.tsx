// Размерность преобразования Фурье

import { useRef } from "react";

// Если не понимаете, что это такое - ставьте 512, 1024 или 2048 ;)
let animationController;
export const AudioMsg = () => {
  const audioRef = useRef<HTMLMediaElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  function handleClick() {
    const audioCtx = new AudioContext();
    const analyzer = audioCtx.createAnalyser();

    const audio = new Audio();
    audio.src = "SOAPMan.mp3";

    const source = audioCtx.createMediaElementSource(audio);
    source.connect(analyzer);

    // connect some audio source to the analyzer

    analyzer.fftSize = 32;

    const bufferLength = analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    analyzer.getByteTimeDomainData(dataArray);

    const amplitudes = [];

    for (let i = 0; i < bufferLength; i++) {
      amplitudes.push(dataArray[i]);
    }

    console.log(amplitudes);
  }

  return (
    <div>
      <div>123</div>
      <button
        className="w-10 h-10 border border-black"
        onClick={() => handleClick()}
      >
        here
      </button>
      <canvas ref={canvasRef}></canvas>
      <audio src="SOAPMan.mp3" ref={audioRef} controls></audio>
    </div>
  );
};
