"use client";

import FakeChat from "@/components/fakeChat/FakeChat";
import {QASystem} from "@/components/fakeChat/QASystem"

const Chat = () => {
  return <FakeChat data={QASystem[0]} />;
};

export default Chat;
