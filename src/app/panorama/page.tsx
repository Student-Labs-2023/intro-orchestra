import ActivityCheck from "@/components/activityCheck/ActivityCheck";
import InstructionCards from "@/components/instructionCards/InstructionCards";
import OrientationChange from "@/components/orientationChange/OrientationChange";
import PanoramaViewer from "@/components/panoramaViewer/PanoramaViewer";

const Panorama = () => {
  return (
    <div className="relative">
      <OrientationChange>
        <ActivityCheck>
          <InstructionCards />
          <PanoramaViewer
            imageSrc={"/panorama-images/home-panorama.jpg"}
            pitch={-30}
            yaw={0}
          />
        </ActivityCheck>
      </OrientationChange>
    </div>
  );
};

export default Panorama;
