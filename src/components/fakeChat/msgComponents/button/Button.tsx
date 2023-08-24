import cn from "clsx";
import localFont from "next/font/local";
import Image from "next/image";
import { ReactNode } from "react";
import uuid from "react-uuid";
import "./button.css";

type ButtonProps = {
  children: NonNullable<ReactNode>;
  onClick: (t: string) => void;
  variant: "pink" | "white" | "whiteArrow" | "pinkBack";
  activeFlicker?: boolean;
};

const geometriaBold = localFont({
  src: "./../../../../fonts/Geometria-Bold.woff",
});

const geometriaRegular = localFont({
  src: "./../../../../fonts/Geometria-Medium.woff",
});

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
          "flex flex-start justify-center md:mb-[14px] sm:mb-[8px] mb-[4px] md:border-[3px] sm:border-[2px] border-[1px] md:rounded-[18px] rounded-[8px] border-[#F060C0] group-active:bg-[#fdd0eb] transition-all hover:bg-[#fdebf2] w-[150px] sm:w-[200px] md:w-[220px] lg:w-[300px] xl:w-[450px]":
            variant === "white",
          "bg-[#D93284] rounded-[16px] w-[18vw] h-[8vh] flex flex-col items-center justify-center pulse":
            variant === "pink" && activeFlicker,
          "flex flex-row items-center justify- md:mb-[14px] sm:mb-[8px] mb-[4px] md:border-[3px] sm:border-[2px] border-[1px] md:rounded-[18px] rounded-[8px] border-[#F060C0] group-active:bg-[#fdd0eb] transition-all hover:bg-[#fdebf1] w-[150px] sm:w-[200px] md:w-[220px] lg:w-[300px] xl:w-[450px]":
            variant === "whiteArrow",
          "bg-[#d8428a] rounded-[16px] flex flex-row items-center justify-center w-[130px] sm:w-[170px] md:w-[170px] lg:w-[230px] xl:w-[380px] md:mb-[11px] sm:mb-[8px] mb-[4px]":
            variant === "pinkBack",
        })}
        onClick={() => {
          onClick(children.toString());
        }}
      >
        {variant === "pinkBack" && (
          <Image
            src="/leftWhite.svg"
            className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] xl:w-[40px] xl:h-[40px] md:ml-1 lg:ml-0"
            alt="Открыть список"
            width={40}
            height={40}
          ></Image>
        )}
        <div
          className={cn({
            "text-white 2xl:text-[24px] xl:text-[21px] lg:text-[17px] md:text-[12px] sm:text-[10px] text-[7px] whitespace-nowrap h-full w-full inline-flex items-center justify-center ":
              variant === "pink",
            "group-active:text-[#e1468c] transition-all text-[#222] xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[12px] text-[8px] p-3 xl:py-3 py-1":
              variant === "white",
            "group-active:text-[#e1468d] transition-all text-[#222] xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[12px] text-[8px] p-3 xl:py-3 py-1":
              variant === "whiteArrow",
            "text-white transition-all  xl:text-[24px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[8px] whitespace-nowrap xl:mr-2 pl-0 p-3 md:py-3 sm:py-2 py-1 ml-1 sm:ml-0":
              variant === "pinkBack",
          })}
          style={geometriaRegular.style}
        >
          {children}
        </div>
        {variant === "whiteArrow" && (
          <Image
            src="/arrowRight.svg"
            className="w-[18px] h-[18px] mr-1 sm:mr-1 xl:mr-3 sm:w-[25px] sm:h-[25px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px]"
            alt="Открыть список"
            width={40}
            height={40}
          ></Image>
        )}
      </button>
    </div>
  );
};
