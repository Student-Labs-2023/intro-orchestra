"use client";

import FakeChat from "@/components/fakeChat/FakeChat";
import { QASystem } from "@/components/fakeChat/QASystem";

const Сhat = () => {
  return (
    <>
      <img src="image5.png" alt="" className="absolute w-[63%]" />
      <FakeChat data={QASystem[0]} />
    </>
  );
};

export default Сhat;
