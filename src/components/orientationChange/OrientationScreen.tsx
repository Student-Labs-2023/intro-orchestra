"use client";
import Image from "next/image";
import localFont from "next/font/local";

const geometriaBold = localFont({ src: "../../fonts/Geometria-Bold.woff" });
const geometriaMedium = localFont({
  src: "../../fonts/Geometria-Medium.woff",
});

export default function OrientationChange() {
  return (
    <>
      <header className="pt-[14px] px-[14px] mb-[60px]">
        <Image
          src={"/logo.svg"}
          alt="Омская Филармония"
          width={100}
          height={35}
        />
      </header>
      <main className="flex flex-col items-center text-center">
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
    </>
  );
}
