import cn from "clsx";
import localFont from "next/font/local";
import { ReactNode } from "react";
import uuid from "react-uuid";
import "./button.css";

type ButtonProps = {
  children: NonNullable<ReactNode>;
  onClick: (t: string) => void;
  variant: "pink" | "white";
  activeFlicker?: boolean;
};

const geometriaBold = localFont({
  src: "./../../../../fonts/Geometria-Bold.woff",
});

const geometriaRegular = localFont({
  src: "./../../../../fonts/Geometria-Medium.woff",
});

// TODO Какая то хуйня черная ебучая мистическая не понятно откуда берется надо разобраться

export const Button = ({
  onClick,
  activeFlicker,
  children,
  variant,
}: ButtonProps) => {
  return (
    <div key={uuid()} className="group ">
      <button
        className={cn({
          "bg-[#D93284] rounded-[16px] w-[18vw] h-[8vh] flex flex-col items-center justify-center":
            variant === "pink",
          "flex flex-start md:mb-[14px] sm:mb-[8px] mb-[4px] md:border-[3px] sm:border-[2px] border-[1px] md:rounded-[18px] rounded-[8px] border-[#F060C0] group-active:bg-[#fdd0eb] transition-all hover:bg-[#fdebf2] w-[150px] sm:w-[200px] md:w-[220px] lg:w-[300px] xl:w-[450px]":
            variant === "white",
          "bg-[#D93284] rounded-[16px] w-[18vw] h-[8vh] flex flex-col items-center justify-center pulse":
            variant === "pink" && activeFlicker,
        })}
        onClick={() => {
          onClick(children.toString());
        }}
      >
        <div
          className={cn({
            "text-white 2xl:text-[24px] xl:text-[21px] lg:text-[17px] md:text-[12px] sm:text-[10px] text-[7px] whitespace-nowrap h-full w-full inline-flex items-center justify-center ":
              variant === "pink",
            "group-active:text-[#e1468c] transition-all text-[#222] xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[12px] text-[8px] p-3 xl:py-3 py-1 lg:ml-3 ":
              variant === "white",
          })}
          style={geometriaRegular.style}
        >
          {children}
        </div>
      </button>
    </div>
  );
};
