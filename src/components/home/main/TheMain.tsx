import Image from "next/image";
import localFont from "next/font/local";

const geometriaBold = localFont({ src: "../../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({src: "../../../fonts/Geometria-Bold.woff",});

export const TheMain = () => {
  return (
    <main className="relative flex flex-col justify-center items-center text-center uppercase w-full h-screen">
      <h1
        style={geometriaBold.style}
        className="text-[25px] text-[#D93284] sm:text-[30px] lg:text-[35px] xl:text-[45px] 2xl:text-[70px]"
      >
        знакомьтесь <br />
        <span
          style={geometriaBold.style}
          className="text-[25px] tracking-[4px] text-[#D93284] sm:text-[35px] lg:text-[45px] xl:text-[60px] 2xl:text-[85px]"
        >
          c оркестром
        </span>
      </h1>
      <p
        style={geometriaMedium.style}
        className="block mb-[15px] text-[15px] normal-case text-[#D93284] sm:text-[17px] lg:text-[23px] xl:text-[24px] 2xl:text-[30px]"
      >
        Нажмите на экран, чтобы начать
      </p>
      <Image
        className="h-[75px] lg:h-[85px]"
        src={"/pointer.svg"}
        alt={"Указатель"}
        width={75}
        height={40}
      />
    </main>
  );
};
