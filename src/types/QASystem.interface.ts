import { IMessage } from "./message.interface";

export interface IQASystem {
  [chatId: string]: {
    name: string;
    start: IMessage;
    qa: { [item: string]: Array<IMessage> };
  };
}
