import InstructionCards from "@/components/instructionCards/InstructionCards";
import PanoramaViewer from "@/components/panoramaViewer/PanoramaViewer";

const Panorama= () => {
  return (
    <div className="relative">
      <InstructionCards/>
      <PanoramaViewer />
    </div>
  );
};

export default Panorama;
