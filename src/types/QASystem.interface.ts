import { IMessage } from "./message.interface";

export interface IQASystem {
  [chatId: string]: {
    name: string;
    panoramaData: {
      imageSrc: string;
      yaw: number;
      pitch: number;
    };
    start: IMessage;
    qa: { [item: string]: Array<IMessage> };
  };
}
