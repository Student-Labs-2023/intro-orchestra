import fs from "fs";
import { WavDecoder } from "wav-decoder";

export function audioDataReciever({}) {
  const readFile = (filepath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, (err, buffer) => {
        if (err) {
          return reject(err);
        }
        return resolve(buffer);
      });
    });
  };

  readFile("../public/SOAPMan.wav")
    .then((buffer) => {
      return WavDecoder.decode(buffer);
    })
    .then(function (audioData) {
      const amplitudes = [];
      for (let i = 0; i < audioData.channelData[0].length; i++) {
        const sample = audioData.channelData[0][i];
        amplitudes.push(Math.abs(sample));
      }
      let bars = [];

      for (
        let i = 0;
        i < amplitudes.length;
        i += Math.trunc(amplitudes.length / 124)
      )
        bars.push(Math.trunc(amplitudes[i] * 1000) / 1000);
    }); // Float32Array
}
