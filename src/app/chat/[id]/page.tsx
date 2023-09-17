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
  window.onload = function () {
    hideAddressBar();
    window.addEventListener(
      "orientationchange",
      function () {
        hideAddressBar();
      },
      false
    );
  };

  function hideAddressBar() {
    setTimeout(function () {
      document.body.style.height = window.outerHeight + "px";
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 1100);
    }, 1000);
    return false;
  }
  return (
    <>
      <ActivityCheck>
        <OrientationChange>
          <FakeChat data={QASystem[params.id]} />
        </OrientationChange>
      </ActivityCheck>
    </>
  );
};

export default Artist;
