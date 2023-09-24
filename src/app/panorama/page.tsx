"use client";
import ActivityCheck from "@/components/activityCheck/ActivityCheck";
import InstructionCards from "@/components/instructionCards/InstructionCards";
import OrientationChange from "@/components/orientationChange/OrientationChange";
import PanoramaViewer from "@/components/panoramaViewer/PanoramaViewer";
import { useSearchParams } from "next/navigation";

const Panorama = () => {
  const searchParams = useSearchParams();
  const instruction = searchParams.get("instruction");
  const pitchParams = searchParams.get("pitch");
  const yawParams = searchParams.get("yaw");
  let pitch = -30;
  let yaw = 0;

  if (pitchParams != null) {
    if (typeof +pitchParams == "number") {
      pitch = +pitchParams;
    }
  }

  if (yawParams != null) {
    if (typeof +yawParams == "number") {
      yaw = +yawParams;
    }
  }

  return (
    <OrientationChange>
      <ActivityCheck>
        <InstructionCards turnOnInstruction={instruction} />
        <PanoramaViewer
          imageSrc={"/panorama-images/home-panorama.webp"}
          pitch={pitch}
          yaw={yaw}
        />
      </ActivityCheck>
    </OrientationChange>
  );
};

export default Panorama;
