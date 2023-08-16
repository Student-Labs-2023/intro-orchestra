import cn from "clsx";
import localFont from "next/font/local";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

const geometriaRegular = localFont({ src: "../../../../fonts/Geometria.woff" });

export const TextQuestionMsg: FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
> = ({ children, className }) => {
  return (
    <div className="w-full flex flex-col items-end">
      <span
        className={cn(
          "max-w-[60%] md:p-2 md:pl-3 md:pr-3 pl-2 pr-2 p-1 lg:mt-4 md:mt-3 sm:mt-2 mt-1 w-auto inline-block bg-[#fdd0eb] rounded-tl-xl rounded-tr-xl rounded-bl-xl lg:text-[20px] md:text-[16px] sm:text-[12px] text-[8px]",

          className
        )}
        style={geometriaRegular.style}
      >
        {children}
      </span>
    </div>
  );
};
