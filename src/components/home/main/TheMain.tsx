import Image from "next/image";
import localFont from "next/font/local";
import styles from './theMain.module.css'
const geometriaBold = localFont({ src: "../../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({src: "../../../fonts/Geometria-Bold.woff",});

export const TheMain = () => {
  return (
    <main className="relative flex flex-col justify-center items-center text-center uppercase h-[calc(100dvh-13dvh)] md:h-[calc(100dvh-20dvh)] 2xl:md:h-[calc(100dvh-15dvh)]">
      <h1
        style={geometriaBold.style}
        className="text-[6.3vh] lg:text-[7vh] text-[#D93284]"
      >
        знакомьтесь <br />
        <span
          style={geometriaBold.style}
          className="text-[7.2vh] lg:text-[7.9vh] tracking-[4px] text-[#D93284]"
        >
          c оркестром
        </span>
      </h1>
      <p
        style={geometriaMedium.style}
        className="block mb-[15px] text-[3.5vh] lg:text-[4.2vh] normal-case text-[#D93284]"
      >
        Нажмите на экран, чтобы начать
      </p>
      <div className="relative w-[3.91vw]">
        <div className={`rounded-full ${styles.gradient} blur-[3px]`}></div>
        <Image
          className="absolute w-[3.7vw] h-[10.2vh] top-[40%] left-[3%]"
          src={"/pointer.svg"}
          alt={"Указатель"}
          width={70}
          height={110}
        />
      </div>
    </main>
  );
};
