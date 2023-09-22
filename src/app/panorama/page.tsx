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
      <ActivityCheck>
        <main className="absolute w-[100vw] h-[100dvh]">
        <InstructionCards turnOnInstruction={instruction} />
        <PanoramaViewer
          imageSrc={"/panorama-images/home-panorama.webp"}
          pitch={-30}
          yaw={0}
        />
        </main>
      </ActivityCheck>
    </OrientationChange>
  );
};

export default Panorama;
