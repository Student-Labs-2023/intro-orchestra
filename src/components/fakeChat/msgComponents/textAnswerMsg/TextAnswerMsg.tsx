import cn from "clsx";
import localFont from "next/font/local";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

const geometriaRegular = localFont({ src: "../../../../fonts/Geometria.ttf" });

export const TextAnswerMsg: FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-[#E6E9FF] max-w-[60%] p-2 pl-3 rounded-tl-xl rounded-tr-xl rounded-br-xl mt-3 w-auto inline-block lg:text-[20px] text-[16px]",
        className
      )}
      style={geometriaRegular.style}
    >
      {children}
    </div>
  );
};
