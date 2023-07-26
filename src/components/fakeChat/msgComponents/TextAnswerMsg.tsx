import cn from "clsx";
import localFont from "next/font/local";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

const geometriaRegular = localFont({ src: "../../../fonts/Geometria.ttf" });

const TextAnswerMsg: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-[#E6E9FF] max-w-[70%] p-3 rounded-tl-lg rounded-tr-lg rounded-br-lg mt-3 w-auto inline-block text-[20px]",
        className
      )}
      style={geometriaRegular.style}
    >
      {children}
    </div>
  );
};

export default TextAnswerMsg;
