import React from "react";
import Link from "next/link";
import Image from "next/image";

export const TheHeader = () => {
  return (
    <header className="flex justify-between items-center gap-[25px] flex-wrap mt-[4.1vh] mx-[4.1vh]">
      <Link href="https://omfil.ru" style={{ zIndex: "2" }}>
        <Image
          className="w-[13.5dvw]"
          src={"/logo.svg"}
          alt={"Омская Филармония"}
          width={80}
          height={50}
        />
      </Link>
    </header>
  );
};
