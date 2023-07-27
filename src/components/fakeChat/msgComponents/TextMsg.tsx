import { PropsWithChildren } from "react";

const TextMsg = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-[#E6E9FF] max-w-[60%] p-3 rounded-tl-lg rounded-tr-lg rounded-br-lg mt-3 w-auto inline-block">
      {children}
    </div>
  );
};

export default TextMsg;
