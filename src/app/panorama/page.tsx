import ActivityCheck from "@/components/activityCheck/ActivityCheck";
import InstructionCards from "@/components/instructionCards/InstructionCards";
import PanoramaViewer from "@/components/panoramaViewer/PanoramaViewer";

const Panorama = () => {
  return (
    <div className="relative w-screen h-screen">
      <ActivityCheck>
        <InstructionCards />
        <PanoramaViewer
          imageSrc={"/panorama-images/1.jpg"}
          pitch={-30}
          yaw={0}
        />
      </ActivityCheck>
    </div>
  );
};

export default Panorama;
