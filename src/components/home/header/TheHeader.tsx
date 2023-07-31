import React from "react";
import Link from "next/link";
import Image from "next/image";


export const TheHeader = () => {
  return (
    <header className="flex justify-between items-center gap-[25px] flex-wrap pr-[50px] pt-[50px] pl-[50px] mb-[200px]">
      <Link href="https://omfil.ru" style={{ zIndex: "2" }}>
        <Image
          src={"/logo.svg"}
          alt={"Омская Филармония"}
          width={250}
          height={150}
        />
      </Link>
    </header>
  );
};
