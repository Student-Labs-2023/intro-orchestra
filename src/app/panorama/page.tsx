import ActivityCheck from "@/components/activityCheck/ActivityCheck";
import InstructionCards from "@/components/instructionCards/InstructionCards";
import PanoramaViewer from "@/components/panoramaViewer/PanoramaViewer";

const Panorama = () => {
  return (
    <div className="relative">
      <ActivityCheck>
        <InstructionCards/>
        <PanoramaViewer />
      </ActivityCheck>
    </div>
  );
};

export default Panorama;
