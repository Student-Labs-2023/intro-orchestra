import cn from "clsx";
import localFont from "next/font/local";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

const geometriaRegular = localFont({ src: "../../../fonts/Geometria.ttf" });

const TextQuestionMsg: FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
> = ({ children, className }) => {
  return (
    <div className="w-full flex flex-col items-end">
      <span
        className={cn(
          "max-w-[70%] p-3 mt-3 w-auto inline-block bg-[#FAEBEB] rounded-tl-lg rounded-tr-lg rounded-bl-lg text-[20px]",
          className
        )}
        style={geometriaRegular.style}
      >
        {children}
      </span>
    </div>
  );
};

export default TextQuestionMsg;
