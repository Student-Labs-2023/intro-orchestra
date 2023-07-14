import Image from "next/image";
import localFont from "next/font/local";

const PTSerif = localFont({ src: "../../../fonts/PTSerif-Bold.ttf" });
const geometriaBold = localFont({ src: "../../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({
  src: "../../../fonts/Geometria-Bold.woff",
});

export const TheMain = () => {
  return (
    <main className="relative flex flex-col justify-center items-center text-center uppercase">
      <h1 style={geometriaBold.style} className="text-[75px] text-[#D93284]">
        знакомьтесь <br />
        <span
          style={geometriaBold.style}
          className="text-[100px] tracking-[8px] text-[#D93284]"
        >
          c оркестром
        </span>
      </h1>
      <p
        style={geometriaMedium.style}
        className="block mb-[70px] text-[45px] normal-case text-[#D93284]"
      >
        Нажмите на экран, чтобы начать
      </p>
      <Image
        className=""
        src={"/pointer.svg"}
        alt={"Указатель"}
        width={85}
        height={155}
      />
    </main>
  );
};
