import Image from "next/image";
import localFont from "next/font/local";

const PTSerif = localFont({ src: "../../../fonts/PTSerif-Bold.ttf" });
const geometria = localFont({ src: "../../../fonts/Geometria-Bold.woff" });

export const TheMain = () => {
  return (
    <main className="relative flex flex-col justify-center items-center text-center uppercase">
      <h1 style={PTSerif.style} className="text-[80px] text-[#f060c0]">
        Знакомство <br />
        <span className="text-[110px] tracking-[8px]">c оркестром</span>
      </h1>
      <p style={geometria.style} className="text-[45px] text-white normal-case">
        Нажмите на экран, чтобы начать
      </p>
      <Image
        className="absolute top-[90%] right-[24%]"
        src={"/pointer.svg"}
        alt={"Указатель"}
        width={85}
        height={155}
      />
    </main>
  );
};
