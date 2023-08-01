import InstructionCards from "@/components/instructionCards/InstructionCards";

const Panorama = () => {
  return (
      <div
        className={
          'w-screen h-screen bg-[url("/instruction-bg.png")] bg-cover bg-no-repeat bg-center flex justify-center items-center'
        }
      >
        <InstructionCards />
      </div>
  );
};

export default Panorama;
