"use client";
import ActivityCheck from "@/components/activityCheck/ActivityCheck";
import InstructionCards from "@/components/instructionCards/InstructionCards";
import OrientationChange from "@/components/orientationChange/OrientationChange";
import PanoramaViewer from "@/components/panoramaViewer/PanoramaViewer";
import { useSearchParams } from "next/navigation";

const Panorama = () => {
  const searchParams = useSearchParams();
  const instruction = searchParams.get("instruction");
  const pitch =
    !isNaN(+searchParams.get("pitch")) &&
    typeof +searchParams.get("pitch") == "number" &&
    searchParams.get("pitch") != ""
      ? +searchParams.get("pitch")
      : -30;
  const yaw =
    !isNaN(+searchParams.get("yaw")) &&
    typeof +searchParams.get("yaw") == "number" &&
    searchParams.get("yaw") != ""
      ? +searchParams.get("yaw")
      : 0;

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
