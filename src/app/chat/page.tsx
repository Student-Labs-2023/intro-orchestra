"use client";

import FakeChat from "@/components/fakeChat/FakeChat";
import { QASystem } from "@/components/fakeChat/QASystem";
import OrientationChange from "@/components/orientationChange/OrientationChange";

const Сhat = () => {
  return (
    <>
      {/* <img src="image5.png" alt="" className="absolute w-[63%]" /> */}
      <OrientationChange>
        <FakeChat data={QASystem[0]} />
      </OrientationChange>
    </>
  );
};

export default Сhat;
