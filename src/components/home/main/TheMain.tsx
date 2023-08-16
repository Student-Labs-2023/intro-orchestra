import Image from "next/image";
import localFont from "next/font/local";
import styles from './theMain.module.css'
const geometriaBold = localFont({ src: "../../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({src: "../../../fonts/Geometria-Bold.woff",});

export const TheMain = () => {
  return (
    <main className="relative flex flex-col justify-center items-center text-center uppercase h-[calc(100dvh-9dvh)]">
      <h1
        style={geometriaBold.style}
        className="text-[7dvh] text-[#D93284]"
      >
        знакомьтесь <br />
        <span
          style={geometriaBold.style}
          className="text-[7.9dvh] tracking-[4px] text-[#D93284]"
        >
          c оркестром
        </span>
      </h1>
      <p
        style={geometriaMedium.style}
        className="block mb-[15px] text-[4.2dvh] normal-case text-[#D93284]"
      >
        Нажмите на экран, чтобы начать
      </p>
      <div className="relative w-[3.91dvw] h-[12.7dvh]">
        <div className={` rounded-full ${styles.gradient} blur-[3px]`}></div>
        <Image
          className="absolute w-[3.7dvw] h-[10.2dvh] top-[17%] left-[9%]"
          src={"/pointer.svg"}
          alt={"Указатель"}
          width={70}
          height={110}
        />
      </div>
    </main>
  );
};
