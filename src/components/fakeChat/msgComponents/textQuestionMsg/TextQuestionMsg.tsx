import cn from "clsx";
import localFont from "next/font/local";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

const geometriaRegular = localFont({ src: "../../../../fonts/Geometria.ttf" });

export const TextQuestionMsg: FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
> = ({ children, className }) => {
  return (
    <div className="w-full flex flex-col items-end">
      <span
        className={cn(
          "max-w-[60%] p-2 pl-3 mt-3 w-auto inline-block bg-[#fdd0eb] rounded-tl-xl rounded-tr-xl rounded-bl-xl lg:text-[20px] text-[16px]",
          className
        )}
        style={geometriaRegular.style}
      >
        {children}
      </span>
    </div>
  );
};
