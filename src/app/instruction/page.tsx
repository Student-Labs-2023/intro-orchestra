import InstructionCards from "@/components/instructionCards/InstructionCards";
import OrientationChange from "@/components/orientationChange/OrientationChange";

const Instruction = () => {
  return (
    <OrientationChange>
      <div
        className={
          'w-screen h-screen bg-[url("/instruction-bg.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'
        }
      >
        <InstructionCards />
      </div>
    </OrientationChange>
  );
};

export default Instruction;
