"use client";

import FakeChat from "@/components/fakeChat/FakeChat";
import { QASystem } from "@/components/fakeChat/QASystem";
import OrientationChange from "@/components/orientationChange/OrientationChange";

import React from "react";

type TProps = {
  params: {
    id: string;
  };
};

const Artist = ({ params }: TProps) => {
  return (
    <>
      <OrientationChange>
        <FakeChat data={QASystem[params.id]}/>
      </OrientationChange>
    </>
  );
};

export default Artist;
