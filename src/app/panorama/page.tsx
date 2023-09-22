"use client";
import ActivityCheck from "@/components/activityCheck/ActivityCheck";
import InstructionCards from "@/components/instructionCards/InstructionCards";
import OrientationChange from "@/components/orientationChange/OrientationChange";
import PanoramaViewer from "@/components/panoramaViewer/PanoramaViewer";
import { useSearchParams } from "next/navigation";

const Panorama = () => {
  const searchParams = useSearchParams();
  const instruction = searchParams.get("instruction");

  return (
    <OrientationChange>
      {/* <ActivityCheck> */}
        <InstructionCards turnOnInstruction={instruction} />
        {/* <PanoramaViewer
          imageSrc={"/panorama-images/home-panorama.webp"}
          pitch={-30}
          yaw={0}
        /> */}
      {/* </ActivityCheck> */}
    </OrientationChange>
  );
};

export default Panorama;
