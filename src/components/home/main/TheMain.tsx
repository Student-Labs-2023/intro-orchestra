import Image from "next/image";
import localFont from "next/font/local";
import styles from './theMain.module.css'
const geometriaBold = localFont({ src: "../../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({src: "../../../fonts/Geometria-Bold.woff",});

export const TheMain = () => {
  return (
    <main className="relative flex flex-col justify-center items-center text-center uppercase h-screen">
      <h1
        style={geometriaBold.style}
        className="text-[25px] text-[#D93284] sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[55px] 2xl:text-[70px]"
      >
        знакомьтесь <br />
        <span
          style={geometriaBold.style}
          className="text-[30px] tracking-[4px] text-[#D93284] sm:text-[33px] md:text-[40px] lg:text-[55px] xl:text-[65px] 2xl:text-[85px]"
        >
          c оркестром
        </span>
      </h1>
      <p
        style={geometriaMedium.style}
        className="block mb-[15px] text-[13px] normal-case text-[#D93284] sm:text-[14px] md:text-[15px] lg:text-[20px] xl:text-[27px] 2xl:text-[30px]"
      >
        Нажмите на экран, чтобы начать
      </p>
      <div className="relative w-[30px] h-[60px] sm:w-[40px] sm:h-[80px] md:w-[50px] md:h-[100px] lg:w-[75px] lg:h-[140px]">
        <div className={` rounded-full ${styles.gradient} blur-[3px]`}></div>
        <Image
          className="absolute w-[70%] h-[75%] top-[10%] left-[19%]"
          src={"/pointer.svg"}
          alt={"Указатель"}
          width={70}
          height={110}
        />
      </div>
    </main>
  );
};
