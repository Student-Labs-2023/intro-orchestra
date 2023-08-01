import InstructionCards from "@/components/instructionCards/InstructionCards";

const Instruction = () => {
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

export default Instruction;
