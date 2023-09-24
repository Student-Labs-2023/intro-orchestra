"use client";

import ActivityCheck from "@/components/activityCheck/ActivityCheck";
import FakeChat from "@/components/fakeChat/FakeChat";
import { QASystem } from "@/components/fakeChat/QASystem";
import OrientationChange from "@/components/orientationChange/OrientationChange";

type TProps = {
  params: {
    id: string;
  };
};

const Artist = ({ params }: TProps) => {
  return (
    <>
      <ActivityCheck>
        <OrientationChange>
          <FakeChat data={QASystem[params.id]} artistId={params.id} />
        </OrientationChange>
      </ActivityCheck>
    </>
  );
};

export default Artist;
