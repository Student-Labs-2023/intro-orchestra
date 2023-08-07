import { MsgClasses } from "./msgClasses.type";

export interface IMessage {
  msgClass: MsgClasses;
  msg: string;
  device: "phone" | "desktop" | "any";
}
