import { IMessage } from "./message.interface";

export interface IQASystem {
  [chatId: string]: {
    photoSrc: string;
    name: string;
    panoramaData: {
      imageSrc: string;
      yaw: number;
      pitch: number;
    };
    start: IMessage;
    qa: {
      [category: string]: {
        [question: string]: {
          messages: Array<IMessage>;
          fullQuestion: string;
        };
      };
    };
  };
}
