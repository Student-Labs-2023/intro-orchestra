"use client";
import localFont from "next/font/local";
import Image from "next/image";

const geometriaBold = localFont({ src: "../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({
  src: "../../fonts/Geometria-Medium.woff",
});

export default function OrientationScreen() {
  return (
    <div className="z-[9999] bg-white h-screen w-screen absolute">
      <header className="pt-[25px] px-[25px]">
        <Image
          src={"/logo.svg"}
          alt="Омская Филармония"
          width={100}
          height={35}
        />
      </header>
      <main className="flex flex-col items-center justify-center h-[85vh] text-center">
        <Image
          className="mb-[30px]"
          src={"/phone-icon.svg"}
          alt="Телефон"
          width={120}
          height={210}
        />
        <p style={geometriaMedium.style} className="text-[16px]">
          Пожалуйста,
          <br />
          <span style={geometriaBold.style}>переверните </span> свой телефон
          <br />
          для начала просмотра
        </p>
      </main>
    </div>
  );
}
