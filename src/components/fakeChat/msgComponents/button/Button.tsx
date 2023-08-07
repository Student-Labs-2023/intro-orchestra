import cn from "clsx";
import localFont from "next/font/local";
import { ReactNode } from "react";
import uuid from "react-uuid";

type ButtonProps = {
  children: NonNullable<ReactNode>;
  onClick: (t: string) => void;
  variant: "pink" | "white";
};

const geometriaBold = localFont({
  src: "./../../../../fonts/Geometria-Bold.woff",
});

export const Button = ({ onClick, children, variant }: ButtonProps) => {
  return (
    <div key={uuid()} className="group">
      <button
        className={cn({
          "bg-[#D93284] rounded-[16px] w-[28vw] h-[12vh] flex flex-col items-center justify-center":
            variant === "pink",
          "flex flex-start mb-[14px] border-[3px] rounded-[18px] border-[#F060C0] group-active:bg-[#fdd0eb] transition-all hover:bg-[#fdebf2] w-[200px] lg:w-[300px] xl:w-[450px]":
            variant === "white",
        })}
        onClick={() => {
          onClick(children.toString());
        }}
      >
        <span
          className={cn({
            "text-white text-[2.3vw] whitespace-nowrap pb-1 pl-3 pr-3":
              variant === "pink",
            "group-active:text-[#e1468c] transition-all text-[#222] xl:text-[24px] lg:text-[20px] text-[16px] p-3 lg:ml-3":
              variant === "white",
          })}
          style={geometriaBold.style}
        >
          {children}
        </span>
      </button>
    </div>
  );
};
