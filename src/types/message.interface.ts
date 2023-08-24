import { MsgClasses } from "./msgClasses.type";

export interface IMessage {
  msgClass: MsgClasses;
  msg: string;
  randomList?: string[];
  device: "phone" | "desktop" | "any";
}
